variable "aws_account" {
  default     = "personal"
  description = "personal account"
}

variable "aws_region" {
  default = "us-east-1"
}

variable "environment" {
  default = "production"
}

variable "relay_email" {
  default = "noreply@juliantellez.com"
}

variable "forward_emails" {
  type = map(list(string))

  default = {
    "hello@juliantellez.com" = ["juliantellezmendez@gmail.com"]
  }

  description = "Map of forward emails"
}
