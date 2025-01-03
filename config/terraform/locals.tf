locals {
  tags = {
    application   = "personal-website"
    environment   = "${var.environment}"
    gitRepo       = "github.com/juliantellez/${local.project_repo}"
    managedBy     = "Terrafrom"
    WAFProtection = false
  }

  enviroment_delimiter = var.environment == "production" ? "" : "-${var.environment}"

  project_repo                = "personal-website"
  bucket_name                 = "julian-tellez-personal-website"
  acm_certificate_domain_name = "juliantellez.com"

  cloudfront_origin_id = "s3-${local.bucket_name}${local.enviroment_delimiter}"

  route53_zone_id     = "ZNFD9XO2P7BQI"
  route53_domain_name = "juliantellez.com"
}
