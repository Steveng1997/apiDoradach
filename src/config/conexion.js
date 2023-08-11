const mysql = require('mysql2');
require('dotenv').config();

/**
 * @description PROD
 */
const config = {
  host: "doradachik.cm4dyckm5td2.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "doradachikAdmin",
  password: "Di8{q3vz3myy",
  database: "doradachik"
};

/**
 * @description LOCAL
 */
// const config = {
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "doradachik"
// };

const pool = mysql.createPool(config);

module.exports = pool;