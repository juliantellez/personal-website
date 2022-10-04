terraform {
  required_version = ">= 1.3.0"

  backend "s3" {
    bucket  = "julian-tellez-tfstate"
    key     = "personal-website"
    region  = "us-east-1"
    encrypt = true
    profile = "personal"
  }
}
