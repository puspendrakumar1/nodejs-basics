const { MongoClient } = require('mongodb');
const url = "mongodb+srv://puspendrakumar:chnYaCqoem6IZqYe@star.7qq7eww.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
const database = 'ecomm';


async function dbConnect(){
 
  let result = await client.connect();
  db = result.db(database);
  return db.collection('products');
  // let response = await collection.find({name:"m40"}).toArray();
  // console.log(response);
}

module.exports = dbConnect; 