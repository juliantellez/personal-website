terraform {
  required_version = ">= 0.11.10"

  backend "s3" {
    bucket  = "julian-tellez-tfstate"
    key     = "personal-website"
    region  = "us-east-1"
    encrypt = true
    profile = "personal"
  }
}
