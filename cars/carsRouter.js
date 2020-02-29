const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars = await db.select("*").from("cars")
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const cars = await db.first("*").from("cars").where({ id: req.params.id })
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

module.exports = router
