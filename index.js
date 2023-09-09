const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./connection/connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/mainpage", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (error, result) => {
    response(200, result, "Select all data from students table in brawijaya_university database", res);
  });
});

//find students based on nim
app.get("/find", (req, res) => {
  const sql = `SELECT * FROM students WHERE nim = ${req.query.nim}`;
  db.query(sql, (error, result) => {
    try {
      if (result != 0) {
        response(200, result, "Find student based on NIM", res);
        console.log(result);
      } else {
        res.send(`Error, can't find any students who have NIM ${req.query.nim}`);
      }
    } catch (e) {
      console.log(error);
    }
  });
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("Login Berhasil...");
});

app.put("/updateuser", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update berhasil...");
});

app.listen(port, () => {
  console.log("Example app listening on port " + port);
});
