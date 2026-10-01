const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      Username: <input type="text" name="username"><br><br>
      Password: <input type="password" name="password"><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  if (req.body.username === "admin" && req.body.password === "1234") {
    res.send("Login Successful");
  } else {
    res.send("Invalid username or password");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
