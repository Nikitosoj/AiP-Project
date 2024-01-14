var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("Ego");
database.dropDatabase()
database = client.db("Ego");
const egoist = database.collection("egoists");
const result = await egoist.insertOne({name:"Egoist"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run();