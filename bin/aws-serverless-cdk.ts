#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsServerlessStorageStack } from '../lib/aws-serverless-storage-stack';
import { AwsServerlessIdentityStack } from '../lib/aws-serverless-identity-stack';
import { AwsServerlessTranscoderStack } from '../lib/aws-serverless-transcoder-stack';

const app = new cdk.App();
new AwsServerlessStorageStack(app, 'AwsServerlessStorageStack');
new AwsServerlessIdentityStack(app, 'AwsServerlessIdentityStack');
new AwsServerlessTranscoderStack(app, 'AwsServerlessTranscoderStack');
