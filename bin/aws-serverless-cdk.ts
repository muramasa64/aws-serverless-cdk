#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsServerlessStorageStack } from '../lib/aws-serverless-storage-stack';

const app = new cdk.App();
new AwsServerlessStorageStack(app, 'AwsServerlessStorageStack');
