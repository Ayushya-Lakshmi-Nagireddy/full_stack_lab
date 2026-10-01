const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "katyayani" },
  { id: 2, name: "Ravi" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  students.push(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
