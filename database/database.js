import test from 'assert';

import { MongoClient } from 'mongodb';

import mongo from '../config/mongodb.json';

const url = 'mongodb://' + mongo.ip + ':' + mongo.port + '/' + mongo.database;

MongoClient.connect(url)
        .then(db => {
            db.createCollection('fyj');

            db.close();
        })
        .catch(err => {
            throw err;
        });
