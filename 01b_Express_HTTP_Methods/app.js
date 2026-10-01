const express = require("express");
const app = express();
app.use(express.json());

let data = { name: "Katyayani" };

app.post("/data", (req, res) => {
  data = req.body;
  res.send("Data accepted");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.delete("/data", (req, res) => {
  data = {};
  res.send("Data deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
