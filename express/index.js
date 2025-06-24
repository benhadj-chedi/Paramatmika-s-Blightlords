const express = require("express");
const path = require("path");
const workingHours = require("./middlewares/workingHours");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(workingHours);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`listen to port 3000 :  http://localhost:${PORT}`);
});
