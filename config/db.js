const { createPool } = require('mysql2');
const { config } = require("dotenv");

config();

const db = createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});


module.exports = { db };