const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 3001;
const ioPort = process.env.port || 3002;
const path = require("path");
const Sequelize = require("sequelize");
const io = require("socket.io")();
const redis = require("redis");
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
	console.log("REQUEST BODY ====>>>> ", req.body);
	chat_messages.push(req.body);
	res.send("Hello");
});

app.get("/*", function(req, res) {
	res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

io.on("connection", client => {
	client.on("subscribeToMessages", () => {
		console.log("Client is subscribing to messages");
		console.log(chat_messages);
		chat_messages.forEach(messageObject => {
			console.log(messageObject.message);
			client.emit("message", messageObject.message);
		});
	});
});

io.listen(ioPort);
console.log("Socket.io listening on " + ioPort);

app.listen(port, () => {
	console.log("We are live on " + port);
});
