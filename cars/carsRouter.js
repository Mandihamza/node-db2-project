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

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            titleStatus: req.body.titleStatus
        }
        const [id] = await db("cars").insert(payload)
        const newCar = await db("cars").where("id", id).first()
        res.status(204).json(newCar)
    } catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            titleStatus: req.body.titleStatus
        }
        await db("cars").where("id", req.params.id).update(payload)
        const car = await db("cars").where("id", req.params.id).first()
        res.json(car)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        await db("cars").where("id", req.params.id).del()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router
