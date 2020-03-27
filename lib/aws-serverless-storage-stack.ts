import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');

export class AwsServerlessStorageStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const uploadBucketName = process.env.CDK_MY_VIDEO_UPLOAD_BUCKET_NAME || "serverless-video-upload"
        const transcodedBucketName = process.env.CDK_MY_VIDEO_TRANSCODED_BUCKET_NAME || "serverless-video-transcode"

        const uploadBucket = new s3.Bucket(this, "videoUploadBucket", {
            bucketName: uploadBucketName
        });

        const transcodedBucket = new s3.Bucket(this, "videoTranscodedBucket", {
            bucketName: transcodedBucketName
        })
    }
}
