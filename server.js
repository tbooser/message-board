const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 3001;
const ioPort = process.env.port || 3002;
const path = require("path");
const io = require("socket.io")();
let client = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let chatters = [];
let chat_messages = [];

let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
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
  console.log("Socket connected: " + client.id);

  client.on("action", action => {
    if (action.type === "SERVER/TEST") {
      console.log("Received a test action");
      client.emit("action", { type: "message", data: "Test response from server" });
    }
  });

  client.on("action", action => {
    if (action.type === "SERVER/MESSAGE") {
      console.log("Received a server/message action => ", action.message);
      client.emit("action", { type: "message", data: action.message });
    }
  });
});

io.listen(ioPort);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
