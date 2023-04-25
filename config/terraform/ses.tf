# SES domain
resource "aws_ses_domain_identity" "email" {
  domain = local.route53_domain_name
}

resource "aws_route53_record" "email_verification_record" {
  zone_id = local.route53_zone_id
  name    = local.route53_domain_name
  type    = "TXT"
  ttl     = "600"
  records = [
    aws_ses_domain_identity.email.verification_token
  ]
}

# DKIM
resource "aws_ses_domain_dkim" "email" {
  domain = aws_ses_domain_identity.email.domain
}

resource "aws_route53_record" "email_dkim_records" {
  count   = 3
  zone_id = local.route53_zone_id
  name    = "${element(aws_ses_domain_dkim.email.dkim_tokens, count.index)}._domainkey.mailslurp.com"
  type    = "CNAME"
  ttl     = "600"

  records = [
    "${element(aws_ses_domain_dkim.email.dkim_tokens, count.index)}.dkim.amazonses.com",
  ]
}

# SES mail to records
resource "aws_route53_record" "email-mx-records" {
  zone_id = local.route53_zone_id
  name    = local.route53_domain_name
  type    = "MX"
  ttl     = "600"

  records = [
    "10 inbound-smtp.us-east-1.amazonses.com",
    "10 inbound-smtp.us-east-1.amazonaws.com",
  ]
}

resource "aws_ses_email_identity" "email_hello" {
  email = "hello@${local.route53_domain_name}"
}

# S3 BUCKET
resource "aws_s3_bucket" "email_bucket" {
  acl    = "private"
  bucket = "email-${local.bucket_name}"

  tags = {
    application = "${lookup(local.tags, "application")}"
    environment = "${lookup(local.tags, "environment")}"
    gitRepo     = "${lookup(local.tags, "gitRepo")}"
    managedBy   = "${lookup(local.tags, "managedBy")}"
  }
}

data "aws_caller_identity" "current" {}

data "aws_iam_policy_document" "email_bucket" {
  statement {
    effect    = "Allow"
    actions   = ["s3:PutObject"]
    resources = ["${aws_s3_bucket.email_bucket.arn}/*"]

    principals {
      identifiers = ["ses.amazonaws.com"]
      type        = "Service"
    }
    condition {
      test     = "StringEquals"
      values   = [data.aws_caller_identity.current.account_id]
      variable = "aws:Referer"
    }
  }
}

resource "aws_s3_bucket_policy" "email_bucket" {
  bucket = aws_s3_bucket.email_bucket.id
  policy = data.aws_iam_policy_document.email_bucket.json
}

# SES RULE SET
resource "aws_ses_receipt_rule_set" "email_hello_rule_set" {
  rule_set_name = "${local.route53_domain_name}_email_hello"
}

resource "aws_ses_active_receipt_rule_set" "email" {
  rule_set_name = aws_ses_receipt_rule_set.email_hello_rule_set.rule_set_name
}

resource "aws_ses_receipt_rule" "email_hello_rule" {
  name          = "${local.route53_domain_name}_email_hello"
  rule_set_name = aws_ses_receipt_rule_set.email_hello_rule_set.rule_set_name
  enabled       = true
  scan_enabled  = true

  recipients = keys(var.forward_emails)

  s3_action {
    bucket_name = aws_s3_bucket.email_bucket.bucket
    position    = 1
  }

  lambda_action {
    function_arn = aws_lambda_function.email_lambda.arn
    topic_arn    = aws_sns_topic.email_hello_topic.arn
    position     = 2
  }
}

# SNS TOPIC
resource "aws_sns_topic" "email_hello_topic" {
  name       = "email_hello_topic_${local.project_repo}"
  fifo_topic = false
}

resource "aws_sns_topic_subscription" "email_hello_topic_target" {
  topic_arn = aws_sns_topic.email_hello_topic.arn
  protocol  = "email"
  endpoint  = "juliantellezmendez@gmail.com"
}

#################################################
# Lambda

data "aws_iam_policy_document" "assume" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = [
      "sts:AssumeRole"
    ]
  }
}

data "aws_iam_policy_document" "email_lambda" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = [
      "sts:AssumeRole"
    ]
  }
}

resource "aws_iam_role" "email_lambda" {
  name               = "email_lambda"
  assume_role_policy = data.aws_iam_policy_document.email_lambda.json

  tags = {
    application = "${lookup(local.tags, "application")}"
    environment = "${lookup(local.tags, "environment")}"
    gitRepo     = "${lookup(local.tags, "gitRepo")}"
    managedBy   = "${lookup(local.tags, "managedBy")}"
  }
}

data "archive_file" "email_lambda" {
  type        = "zip"
  source_dir  = "${path.module}/lambda-email-forwarder"
  output_path = "lambda-email-forwarder.zip"
}

resource "aws_lambda_function" "email_lambda" {
  function_name = "email_lambda"
  filename      = "lambda-email-forwarder.zip"
  role          = aws_iam_role.email_lambda.arn

  handler = "index.handler"

  source_code_hash = data.archive_file.email_lambda.output_base64sha256
  runtime          = "nodejs16.x"

  environment {
    variables = {
      EMAIL_FROM            = var.relay_email
      EMAIL_BUCKET_NAME     = aws_s3_bucket.email_bucket.bucket
      EMAIL_BUCKET_PATH     = ""
      EMAIL_FORWARD_MAPPING = jsonencode(var.forward_emails)
    }
  }

  tags = {
    application = "${lookup(local.tags, "application")}"
    environment = "${lookup(local.tags, "environment")}"
    gitRepo     = "${lookup(local.tags, "gitRepo")}"
    managedBy   = "${lookup(local.tags, "managedBy")}"
  }
}

resource "aws_lambda_permission" "email_lambda" {
  statement_id   = "AllowExecutionFromSES"
  action         = "lambda:InvokeFunction"
  function_name  = aws_lambda_function.email_lambda.function_name
  principal      = "ses.amazonaws.com"
  source_account = data.aws_caller_identity.current.account_id
}
