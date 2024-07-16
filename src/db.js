const { Pool } = require('pg');

const pool = new Pool({
    user: 'edwin',
    host: 'localhost',
    database: 'shopease',
    password: '',
    port: 5432,
});

module.exports = pool;
