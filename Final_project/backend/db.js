const {Pool}  = require('pg')

const pool = new Pool ({
  host:process.env.DBHOST,
  user: process.env.DBUSER,
  password:process.env.DBPASSWORD,
  database:process.env.DBNAME,
  port:process.env.DBPORT,
  ssl : {rejectUnauthorized :false}
})


module.exports = pool;

