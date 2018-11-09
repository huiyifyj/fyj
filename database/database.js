import mongoose from 'mongoose';

import mongo from '../config/mongodb.json';

const url = mongo.url;

mongoose.connect(url);
