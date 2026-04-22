# nodejs-CI-CD-pipeline
This projects aims to build a CI/CD pipeline for deploying an nodejs server on a VM

# OOPS, After a weeklong time it's finally up Hurray !!!
Let me expain the Complete setup i followed so you can make it Live in less than 5mins.

**Tech Stack :-**
1. Nodejs - for Application server
2. AWS EC2 - our remote computer hosting the service
3. terraform - robust version control & smart Infrastructure allocation tool
4. NGINX - used as a part of proxy to the service on EC2
5. github Actions - CI/CD tool we are gonna use

# Server(Nodejs) code
The root application is converted into a module export *app.js*, this enables us to test the application with automation scripts. The app.js is consumed by *index.js* where we listen a `PORT` of our choise.
`PORT` is configured only at *github-acions/secrets*.
The test scripts are written under `__tests__` folder, here we used `jest` to do automation testing.

# Infrastructure
We are using AWS, all the needed `VPC`, `subnets`, `EC2`, `security_groups`, `aws_route_table_association`, `aws_route_table`, `aws_internet_gateway` all were configured in *infrastructure/main.tf* .
**Important:-** It is absolute mandatory to use a remote backup for terraform, which is configured under *infrastructure/bootstrap/* and *infrastructure/backend.tf*, This will ensure one consistent Infra is used across multiple sessions either that may be your personal computer/ VM/ github actions session.

Make sure you see the security groups as per the traffic requirement, here
22 - SSH
80 - web server configuration
443 - SSL
4000 - Nodejs server(It's my choise)

# ENVIROMENT variables to be added in github/actions/secrets
`AWS_ACCESS_KEY_ID` - to be obtained from AWS
`AWS_SECRET_ACCESS_KEY` - to be obtained from AWS
[text](https://us-east-1.console.aws.amazon.com/iam/home?region=ap-south-1#/security_credentials) use this link, go to Access keys generate a set.

`DOMAIN` - a domain/subdoamin like bio.iamgoutham.in, iamgoutham.in
`EC2_SSH_KEY` - go and create a new key_pair *Best policy to create a new key pair for each of the instance/project*
`EMAIL_FOR_CERTBOT` - personal email acceptable
`PORT` - your choise but not among reserved PORTS

`REPO_NAME` - repository name
USER`_NAME_GITHUB - your github user name

https://github.com/goutham469/nodejs-CI-CD-pipeline

See this repo URL for example:-
goutham469 -> is the `USER_NAME_GITHUB`
nodejs-CI-CD-pipeline -> is the `REPO_NAME`

`be aware of the REPO_NAME` this will be used by the `pm2` for process management
`DOMAIN_NAME` is used for nginx at creating *sites-available*, *sites-enabled*.

See `deploy.yml` for more detailed workflow.