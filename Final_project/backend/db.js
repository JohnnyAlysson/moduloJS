const {Pool}  = require('pg')

const pool = new Pool ({
  host:process.env.DBHOST,
  user: process.env.DBUSER,
  password:process.env.DBPASSWORD,
  database:process.env.DBNAME,
  port:process.env.DBPORT,
  ssl : {rejectUnauthorized :false}
})

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to database successfully');
    release();
  }
});

module.exports = pool;

