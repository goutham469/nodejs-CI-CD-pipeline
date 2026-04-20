variable "region" {
    type = string
    default = "ap-south-1"
}

variable "ami" {
    type = string
    default = "ami-0ea87431b78a82070"
}

variable "instance_type" {
  type = string
  default = "t2.nano"
}

variable "key_name" {
  type = string
  default = "f5"
}