# Simple AWS CDK Structure

- Creation of a SQS Queue
- Creation of a lambda that is triggered when the queue receives messages

## Requirements 
- Node.js
- Docker
- AWS CDK CLI
- AWS SAM

## Useful commands

* `npm run build`        compile typescript to js
* `npm run watch`        watch for changes and compile
* `npm run test`         perform the jest unit tests
* `npm run clean`        cleans the current CloudFormation template
* `npm run synth`        emits the synthesized CloudFormation template
* `npm run rebuild`      cleans the current template and synthesized CloudFormation template
* `cdk diff`             compare deployed stack with current state


## TODO

- Add script to deploy the stack
- Add github action to deploy to the configured aws account
- Add github action to run tests every commit pushed
