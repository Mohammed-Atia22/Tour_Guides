//require('dotenv').config();
require('dotenv').config();
// the problem is the branch does not see the .env file because it is in .gitignore file
const mysql = require('mysql2');
const util = require('util');


const pool = mysql.createPool({
    host:process.env.MYSQLHOST,
    port:process.env.MYSQLPORT,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQLDATABASE,
    waitForConnections:true,
    connectionLimit: 10,
    queueLimit: 0
});

// Promisify the pool query function
pool.query = util.promisify(pool.query);
pool.getConnection = util.promisify(pool.getConnection);

//console.log(process.env.MYSQL_PASSWORD)

module.exports = pool;










