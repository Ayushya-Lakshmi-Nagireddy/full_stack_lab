const express = require("express");
const session = require("express-session");
const app = express();

app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: true
}));

app.get("/", (req, res) => {
  req.session.username = "katyayani";
  res.send("Session created for " + req.session.username);
});

app.get("/profile", (req, res) => {
  res.send("Welcome " + req.session.username);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
