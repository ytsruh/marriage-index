const express = require("express");
const router = express.Router();
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});
connection.connect();

//Home route
router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home | St Helens Marriage Index",
    pageDesc: "Testing"
  });
});

//Search routes
router.get("/search", (req, res) => {
  res.render("search", {
    pageTitle: "Search | St Helens Marriage Index",
    pageDesc: "Testing"
  });
});

router.post("/search", (req, res) => {
  let query = `SELECT * FROM marriages
                WHERE (firstsurname LIKE '%${req.body.surname}%'
                   OR secondsurname LIKE '%${req.body.surname}%') `;

  if (req.body.firstname != "") {
    query += `AND (firstname LIKE '%${req.body.firstname}%'
              OR secondname LIKE '%${req.body.firstname}%') `;
  }
  if (req.body.town != "") {
    query += `AND location LIKE '%${req.body.town}%' `;
  }
  if (req.body.year != "") {
    query += `AND year LIKE '%${req.body.year}%' `;
  }

  if (query) {
    query += `LIMIT 100`;
  }

  connection.query(query, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

//Contact route
router.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact | St Helens Marriage Index",
    pageDesc: ""
  });
});

module.exports = router;
