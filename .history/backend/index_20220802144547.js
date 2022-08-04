const express = require("express");
const app = express();

app.get("/v1/dogs", (req, res) => {
	res.send("my dogs");
});

app.listen("8080", () => {
	console.log("Server is running....");
});
