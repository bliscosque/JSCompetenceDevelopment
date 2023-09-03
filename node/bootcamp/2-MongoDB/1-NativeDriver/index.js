const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('fruits');
   
    await insertDocuments(db)
   
    return 'done.';
  }
   
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


// INSERT
async function insertDocuments (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    await collection.insertMany([
        {
        name: "apple",
        score: 8,
        revire: "great"
        }, 
        {
        name: "pear",
        score: 9,
        review: "normal"
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(2, result.result.n);
        assert.equal(2, result.ops.length);
        console.log("Inserted 2 documents into the collection");
        callback(result);
    });
    }