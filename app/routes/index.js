const messageRoutes = require("./message_routes");
const express = require("express");
const router = express.Router();

module.exports = (app, db) => {
	router.get("/", (req, res) => {
		res.render("Base route");
	});
};

module.exports = (app, db) => {
	messageRoutes(app, db);
};
