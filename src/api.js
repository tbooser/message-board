import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3002");

let subscribeToTimer = cb => {
	socket.on("timer", timestamp => cb(null, timestamp));
	socket.emit("subscribeToTimer", 1000);
};

let subscribeToMessages = cb => {
	socket.on("message", message => cb(null, message));
	socket.emit("subscribeToMessages");
};

export { subscribeToTimer, subscribeToMessages };
