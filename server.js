const express = require('express');

const carsRouter = require("./cars/carsRouter.js")
const welcomeRouter = require("./welcome/welcomeRouter.js")

const server = express();

server.use(express.json());
server.use("/", welcomeRouter)
server.use("/api/cars", carsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
    })
    next(err)
})

module.exports = server;