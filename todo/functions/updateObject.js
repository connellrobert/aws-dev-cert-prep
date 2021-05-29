const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient();

exports.responder = (event, context, callback) => {
    const {body} = event;
    const params = {
        TableName: "todo",
        Key: {
            id: body.id
        },
        UpdateExpression: `set topic= :topic, complete=:complete`,
        ExpressionAttributeValues: {
            ':topic': body.topic,
            ':complete': body.complete
        }
    };
    ddb.update(params, (err, data) => {
        const response = {
            "statusCode":200,
            "headers":{},
            "isBase64Encoded": false,
            "body":JSON.stringify({status:"fulfilled"})
        }
        callback(null, response)
    });
}