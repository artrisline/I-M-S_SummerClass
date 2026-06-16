const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
require("dotenv").config();
const connectionString =process.env.CONNECT_STRING;

app.get("/", (req, res) => {
	res.send("This is your main page");
});

app.get("/about", (req, res) => {
	res.send("This is your about section");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
});

//artrisline111803


mongoose
	.connect(connectionString)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));