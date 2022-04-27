const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'andres',
  password: 'Qwertyuop.1',
  database: 'Hackgames'
});
