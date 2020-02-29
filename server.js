const express = require('express');

const welcomeRouter = require("./welcome/welcomeRouter.js")

const server = express();

server.use(express.json());
server.use("/", welcomeRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
    })
    next(err)
})

module.exports = server;