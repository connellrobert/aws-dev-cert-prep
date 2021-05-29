const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient();

exports.responder = (event, context, callback) => {
    const params = {
        TableName: "todo"
    }
    ddb.scan(params, (err, data) => {
        const response = {
            "statusCode": 200,
            "headers":{
            },
            "isBase64Encoded": false,
            "body": JSON.stringify(data? data.Items : {status: 'error:' + err})
        }
        callback(null, response)
    });
}