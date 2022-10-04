resource "aws_iam_user" "personal_website_user" {
  name = "personal_website_user"

  tags = {
    application = "${lookup(local.tags, "application")}"
    environment = "${lookup(local.tags, "environment")}"
    gitRepo     = "${lookup(local.tags, "gitRepo")}"
    managedBy   = "${lookup(local.tags, "managedBy")}"
  }
}

resource "aws_iam_user_policy" "personal_website_user" {
  name   = aws_iam_user.personal_website_user.name
  user   = aws_iam_user.personal_website_user.name
  policy = data.aws_iam_policy_document.personal_website_user.json
}

data "aws_iam_policy_document" "personal_website_user" {
  statement {
    actions = [
      "s3:*",
    ]

    resources = [
      "${aws_s3_bucket.bucket.arn}",
      "${aws_s3_bucket.bucket.arn}/*"
    ]
  }
}

resource "aws_iam_access_key" "personal_website_user" {
  user = aws_iam_user.personal_website_user.name
}

output "personal_website" {
  value = aws_s3_bucket.bucket.id
}

output "personal_website_access_key_id" {
  value = aws_iam_access_key.personal_website_user.id
}

output "personal_website_secret_access_key" {
  value     = aws_iam_access_key.personal_website_user.secret
  sensitive = true
}
