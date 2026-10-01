const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Student = mongoose.model("Student", {
  name: String,
  age: Number
});

app.post("/student", async (req, res) => {
  const student = await Student.create(req.body);
  res.send(student);
});

app.get("/student", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.put("/student/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id, req.body, { new: true }
  );
  res.send(student);
});

app.delete("/student/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
