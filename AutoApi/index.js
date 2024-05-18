const serverless = require("serverless-http");
const express = require("express");
const app = express();
// This is the base path
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from Auto Api!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/validateUser", (req, res, next) => {
  return res.status(200).json({
    message: "user ok",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
