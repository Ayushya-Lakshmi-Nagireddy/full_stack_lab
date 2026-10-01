const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.send("Task added");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((task) => task.id != req.params.id);
  res.send("Task deleted");
});

app.listen(3000, () => {
  console.log("To-Do app running on port 3000");
});
