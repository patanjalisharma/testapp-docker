const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const PORT = 5050;

// Mongo URL (service name from docker-compose)
const MONGO_URL = "mongodb://admin:password@mongo:27017";

let db;

MongoClient.connect(MONGO_URL)
  .then(client => {
    db = client.db("testdb");
    console.log("Connected to MongoDB");
  })
  .catch(err => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/add-user", async (req, res) => {
  const { name, email, password } = req.body;

  await db.collection("users").insertOne({
    name,
    email,
    password
  });

  res.send("User added successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});