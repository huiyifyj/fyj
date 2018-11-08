import assert from 'assert';

import { MongoClient } from 'mongodb';

import mongo from '../config/mongodb.json';

const url = 'mongodb://' + mongo.ip + ':' + mongo.port;

// Database Name
const dbName = 'aaa';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
