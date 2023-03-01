import { APIGatewayProxyResult, Context, SQSEvent } from 'aws-lambda'
import { logger } from '../libs/logger';

export const handler = async (event: SQSEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log("Invoking lambda")
    
    const messages = event.Records.map(record => {
        return {
            id: record.messageId,
            message: record.body
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            messages
        }),
    };
};  