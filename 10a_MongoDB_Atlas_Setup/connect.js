const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://<username>:<password>@<cluster>.mongodb.net/studentDB")
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) => console.log(err));
