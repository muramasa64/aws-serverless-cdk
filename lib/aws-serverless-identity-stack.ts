import * as cdk from '@aws-cdk/core';
import iam = require('@aws-cdk/aws-iam');

export class AwsServerlessIdentityStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const lambdaS3ExecutionRole = new iam.Role(this, "lambdaS3ExecutionRole", {
            roleName: "lambda-s3-execution-role",
            assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName("AWSLambdaExecute"),
                iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonElasticTranscoder_JobsSubmitter")
            ]
        });
    }
}
