const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Express.js Routing");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact Page");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send("User ID is: " + userId);
});

app.get("/student/:name/:rollno", (req, res) => {
  const name = req.params.name;
  const rollNo = req.params.rollno;
  res.send("Student Name: " + name + "<br>Roll Number: " + rollNo);
});

app.get("/search", (req, res) => {
  const name = req.query.name;
  const course = req.query.course;
  res.send("Search Result" + "<br>Name: " + name + "<br>Course: " + course);
});

app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  const profileURL = "/profile/" + username;
  res.send("Username: " + username + "<br>Profile URL: " + profileURL);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
