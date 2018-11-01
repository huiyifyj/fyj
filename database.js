import mysql from 'mysql';

import databaseConfig from './config/database.json';

const pool = mysql.createConnection(databaseConfig);

pool.connect((err) => {

    if (err) {
        console.error('❌ Database Configuration Error...');
        return;
    }

    console.log('Connected as ID ' + pool.threadId);

});
