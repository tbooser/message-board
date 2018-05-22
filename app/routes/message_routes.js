module.exports = (app, db) => {
	app.post("/messages", (req, res) => {
		console.log("REQUEST BODY", req.body);
		res.send("Hello");
	});
};
