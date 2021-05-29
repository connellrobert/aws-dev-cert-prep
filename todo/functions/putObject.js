const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient();

exports.responder = (event, context, callback) => {
    const params = {
        TableName: "todo",
        Item: {
            ...event.body
        }
    }
    ddb.put(params, (err, data) => {
        var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify({status: 'fulfilled'}),
        "isBase64Encoded": false
    };
        callback(null, response)
    });
}