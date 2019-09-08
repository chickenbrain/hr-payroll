const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = process.env.PORT || 5000;

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB,
});

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/add-record', (req, res) => {
  const {
    firstName,
    lastName,
    salary,
    superannuation,
  } = req.body.data;

  const {
    grossIncome,
    incomeTax,
    netIncome,
    superannuation2,
    pay,
  } = req.body.data.payslip;

  const SQL = `
    INSERT INTO records
    (first_name, last_name, salary, super_rate, gross_income, income_tax, net_income, superannuation, pay)
    SELECT * FROM (SELECT ?,?,?,?,?,?,?,?,?) AS tmp
    WHERE NOT EXISTS (
      SELECT first_name
      FROM records
      WHERE first_name = ? AND last_name = ?
        AND MONTH(pay_period) = MONTH(NOW())
        AND YEAR(pay_period) = YEAR(NOW())
    ) LIMIT 1
  `;

  db.query(SQL, [
    firstName,
    lastName,
    salary,
    superannuation,
    grossIncome,
    incomeTax,
    netIncome,
    superannuation2,
    pay,
    firstName,
    lastName,
  ], (err, result) => {

    if (err) {
      return res.status(500).send(err);
    }

    res.send({ affectedRows: result.affectedRows });
  });
});
