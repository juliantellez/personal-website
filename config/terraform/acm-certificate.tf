resource "aws_acm_certificate" "main" {
  domain_name       = "${local.acm_certificate_domain_name}"
  subject_alternative_names = ["*.${local.acm_certificate_domain_name}"]
  validation_method = "DNS"

  tags = {
    Name        = "Wildcard - ${local.project_repo}"
    application = "${lookup(local.tags, "application")}"
    environment = "${lookup(local.tags, "environment")}"
    gitRepo     = "${lookup(local.tags, "gitRepo")}"
    managedBy   = "${lookup(local.tags, "managedBy")}"
  }

  lifecycle {
    create_before_destroy = true
  }
}
