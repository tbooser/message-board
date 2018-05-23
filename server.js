const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 3001;
const ioPort = process.env.port || 3002;
const path = require("path");
const io = require("socket.io")();
const redis = require("redis");
let chat_messages = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

app.use(allowCrossDomain);
app.post("/messages", (req, res) => {
  chat_messages.push(req.body);
  res.send("Hello");
});
app.get("/*", function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

io.on("connection", client => {
  client.on("subscribeToMessages", () => {
    chat_messages.forEach(messageObject => {
      client.emit("message", messageObject.message);
    });
  });
});

io.listen(ioPort);
app.listen(port, () => {
  console.log("Server on port " + port);
});
