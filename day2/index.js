const express = require("express");
const app = express();

//runs for every request
app.use((req, res, next) => {
  console.log("Request received at:", new Date());
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/contact", (req, res) => {
  res.send("contact page loaded!");
});
app.get("/custom", (req, res) => {
  res.send("custom data!");
});
app.get("/about", (req, res) => {
  res.send("about page loaded!");
});
app.listen(3000, () => {
  console.log("server chaalo");
});
