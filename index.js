const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/mainpage", (req, res) => {
  console.log({ urlParam: req.query });
  res.send("Hello World");
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
