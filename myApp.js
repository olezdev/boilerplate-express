let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello World");

// app.get("/", function (req, res) {
//   res.send('Hello Express');
// })

app.get("/", function (req, res) {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + '/public'))

app.get("/json", function (req, res) {
  let message = "Hello json";
  message = process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message;
  res.json({ "message": message })
})


























module.exports = app;
