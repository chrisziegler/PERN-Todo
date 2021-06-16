const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;

// see Docker101.odt for information on starting container
// and psql from the commandline including psswd (if needed)
