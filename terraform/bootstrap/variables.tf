variable "region" {
  type    = string
  default = "ap-south-1"
}

variable "project_name" {
  type = string
  default = "ci-cd-pipeline"
}

variable "state_bucket_name" {
  type = string
  # must be globally unique
  default = "goutham469-ci-cd-pipeline-tf-state"
}


variable "lock_table_name" {
  type    = string
  default = "goutham469-ci-cd-pipeline-tf-state"
}
