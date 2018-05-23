module.exports = (app, db) => {
	app.post("/messages", (req, res) => {
		res.send("Hello");
	});
};
