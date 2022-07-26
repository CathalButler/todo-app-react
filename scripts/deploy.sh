#!/bin/bash

AWS_S3_REGION="eu-west-1"
STAGING_BRANCH="dev"
PRODUCTION_BRANCH="main"

# Determine the environment to deploy to based on the branch
# From that, we'll know:
#   - the S3 bucket to sync assets with
#   - the CloudFront distribution for which to create an invalidation
NODE_ENV=''
CLOUDFRONT_DIST_ID=''
if [[ $TRAVIS_BRANCH == $STAGING_BRANCH ]]; then
  NODE_ENV="staging"
  CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_STAGING
  npm run build
elif [[ $TRAVIS_BRANCH == $PRODUCTION_BRANCH ]]; then
  NODE_ENV="production"
  CLOUDFRONT_DIST_ID=$CLOUDFRONT_DIST_ID_PRODUCTION
  npm run build
else
  # Don't want to deploy if it's not one of the above branches
  echo "Not deploying"
  exit
fi

# Build the name of the S3 bucket we want to deploy to
S3_BUCKET="todo-react-$NODE_ENV"
echo "Deploying to the $S3_BUCKET bucket"

# Install the AWS CLI so we can publish to S3
pip3 install awscli --upgrade --user

# Sync our build folder with our S3 bucket
# --acl public-read says deploy the files with public read access
# --delete says to delete files in the bucket that aren't present in the build folder
#   this ensures that old assets built with webpack with hashed names get deleted
#   when a new build of the app is made and the assets get new hash names
aws s3 sync build/ "s3://$S3_BUCKET" --acl public-read --delete

# Force-invalidate the now-outdated assets rather than waiting for them to expire
# Make sure you have the CLOUDFRONT_DIST_ID_* env variables defined for this to work
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DIST_ID \
  --paths /*