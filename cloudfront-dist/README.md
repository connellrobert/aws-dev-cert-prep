# cloudfront-dist

## Pre-requisites
 - [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
 - [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
 - [Configure AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

## Deployment
1. Deploy to cloudformation to create the resource stack (use --guided if a samconfig.toml does not exist in the root directory)
 > sam deploy --guided --parameter-override AppBucket=\<name-of-the-bucket\>

2. Fill the S3 bucket with the files located in the app directory
 > aws s3 sync ./src/app s3://\<name-of-the-bucket\>

3. The url of the cloudfront distribution should be in your outputs from the first command and can also be found in the cloudformation console or cli. Copy and paste the url into your browser with a /index.html suffix.