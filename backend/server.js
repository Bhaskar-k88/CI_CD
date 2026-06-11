const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

app.use(cors()); // ✅ allow all origins

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use(express.json());

const path = require("path");

app.post("/webhook", (req, res) => {
  exec("git pull origin main", { cwd: path.resolve(__dirname, "..") }, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });

  res.send("OK");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});