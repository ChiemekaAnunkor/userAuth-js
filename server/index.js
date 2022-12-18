const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// using cors because our front and back end are on differnet servers ie. localhost:300 and localhost:1337
app.use(cors());
app.use(express.json());
mongoose.connect("")

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(1337, () => {
  console.log("server started on port 1337");
});
