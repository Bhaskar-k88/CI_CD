const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.post("/webhook", (req, res) => {
  exec(
    "git pull origin main",
    { cwd: path.resolve(__dirname, "..") },
    (err, stdout, stderr) => {
      if (err) {
        console.log("ERROR:", err.message);
      }
      console.log(stdout);
      console.log(stderr);
    }
  );

  res.send("OK");
});

app.listen(5001, () => {
  console.log("Server running on port 5000");
});