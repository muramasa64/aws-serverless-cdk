import cdk = require("@aws-cdk/core");
import { TranscoderCustomResource } from '../lib/transcoder-custom-resource';

export class AwsServerlessTranscoderStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const resource = new TranscoderCustomResource(this, 'Transcoder', {
            message: 'CustomResource say hello',
        });

        new cdk.CfnOutput(this, 'ResponseMessage', {
            description: 'The message that came back from the Custom Resource',
            value: resource.response
        });
    }
}
