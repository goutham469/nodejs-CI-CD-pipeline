variable "region" {
    type = string
    default = "ap-south-1"
}

variable "ami" {
    type = string
    default = "ami-05d2d839d4f73aafb"
}

variable "instance_type" {
  type = string
  default = "t2.nano"
}

variable "key_name" {
  type = string
  default = "f5"
}