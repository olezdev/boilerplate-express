let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

// app.get("/", function (req, res) {
//   res.send('Hello Express');
// })

app.use("/", function (req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
})

app.get("/", function (req, res) {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + '/public'))

app.get("/json", function (req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  } else {
    message = message;
  }
  res.json({ message })
})

app.get("/now", function (req, res, next) {
  req.time = Date().toString();
  next();
}, function (req, res) {
  res.json({ time: req.time });
})

app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
})























module.exports = app;
