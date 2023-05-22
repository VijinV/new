const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const user = require("./modal");

const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  const user1 = await user.find();

  res.send(user1);
});

app.post("/", async (req, res) => {
  const name = req.body.name;

  const user1 = new user({
    name: name,
  });

  await user1.save();

  res.end(user1, "added successfully");
});



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"));

app.listen(4000, () => console.log("The Server is  Running"));
