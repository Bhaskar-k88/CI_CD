const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

app.use(cors()); // ✅ allow all origins

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use(express.json());

app.use(express.json());

app.post("/webhook", (req, res) => {
  exec("echo Deploying Project", (err, stdout, stderr) => {
    console.log(stdout);
  });

  res.send("OK");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});