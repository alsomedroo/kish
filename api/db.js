import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument,PutCommand } from "@aws-sdk/lib-dynamodb";



const client = new DynamoDBClient({
    region: "us-east-2", // Replace with your desired region
    credentials: {
        accessKeyId: "YOUR_ACCESS_KEY",
        secretAccessKey: "YOUR_SECRET_KEY"
    },

})

const docClient = DynamoDBDocument.from(client)

export {docClient,PutCommand} 

