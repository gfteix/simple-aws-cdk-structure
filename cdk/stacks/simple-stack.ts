import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class SimpleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const simpleLambda = new NodejsFunction(this, 'simple-lambda-id', {
      entry: 'src/lambdas/simple-lambda.ts',
      handler: 'handler',
      functionName: 'simple-lambda',
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(30),
      description: 'Simple lambda, trigged when the queue has new records. Extracts and returns ids and messages from the records'
    })
 
    const simpleQueue = new Queue(this, 'simple-queue-id', {
      queueName: 'simple-queue',
      removalPolicy: RemovalPolicy.DESTROY,
      retentionPeriod: Duration.hours(1)
    })

    const eventSource = new SqsEventSource(simpleQueue, {
      batchSize: 5 //maximum number of records the lambda will process at once
    })

    simpleLambda.addEventSource(eventSource);
  }
}
