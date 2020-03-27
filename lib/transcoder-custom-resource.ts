import cdk = require("@aws-cdk/core");
import cfn = require("@aws-cdk/aws-cloudformation");
import lambda = require("@aws-cdk/aws-lambda");

import fs = require("fs");
import { cfnTagToCloudFormation } from "@aws-cdk/core";

export interface TranscoderCustomResourceProps {
    message: string;
}

export class TranscoderCustomResource extends cdk.Construct {
    public readonly response: string;

    constructor(scope: cdk.Construct, id: string, props: TranscoderCustomResourceProps) {
        super(scope, id);

        const resource = new cfn.CustomResource(this, "Transcoder", {
            provider: cfn.CustomResourceProvider.lambda(new lambda.SingletonFunction(this, 'Singleton', {
                uuid: "29b77eb0-7034-11ea-a738-2b65b1c7e454",
                code: new lambda.InlineCode(fs.readFileSync('lambda/transcoder-handler.py', { encoding: 'utf-8' })),
                handler: 'index.main',
                timeout: cdk.Duration.seconds(300),
                runtime: lambda.Runtime.PYTHON_3_6,
            })),
            properties: props
        });

        this.response = resource.getAtt('Response').toString();
    }
}
