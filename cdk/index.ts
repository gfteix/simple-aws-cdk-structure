import { App } from "aws-cdk-lib";
import { SimpleStack } from "./stacks/simple-stack";
const app = new App()

new SimpleStack(app, 'simple-stack-id', {
    stackName: 'simple-stack',
    env: {
        account: process.env.AWS_ACCOUNT_ID,
        region: process.env.AWS_REGION,
    }
})