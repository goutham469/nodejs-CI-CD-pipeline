provider "aws" {
    region = var.region
}

resource "aws_vpc" "this" {
  cidr_block = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support = true
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
}

resource "aws_subnet" "this" {
  vpc_id = aws_vpc.this.id
  cidr_block = "10.0.0.0/24"
  map_public_ip_on_launch = true
}

resource "aws_route_table" "this" {
  vpc_id = aws_vpc.this.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.this.id
  }
}

resource "aws_route_table_association" "this" {
  route_table_id = aws_route_table.this.id
  subnet_id = aws_subnet.this.id
}

resource "aws_security_group" "this" {
  name = "aws-sg"
  description = "desc..."
  vpc_id = aws_vpc.this.id

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  ingress {
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  ingress {
    description = "node.js server CI/CD pipeline"
    from_port =4000
    to_port = 4000
    protocol = "tcp"
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [ "0.0.0.0/0" ]
  }
}

resource "aws_instance" "this" {
  ami = var.ami
  instance_type = var.instance_type
  vpc_security_group_ids = [ aws_security_group.this.id ]
  subnet_id = aws_subnet.this.id
  key_name = var.key_name
}

output "ec2_public_ip" {
  value = aws_instance.this.public_ip
}