const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const sales = await db.select("*").from("sales")
        res.json(sales)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const sales = await db.first("*").from("sales").where({ id: req.params.id })
        res.json(sales)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            buyerName: req.body.buyerName,
            salePrice: req.body.salePrice,
            discountAmount: req.body.discountAmount,
            carId: req.body.carId
        }
        const [id] = await db("sales").insert(payload)
        const newSale = await db("sales").where("id", id).first()
        res.status(204).json(newSale)
    } catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            buyerName: req.body.buyerName,
            salePrice: req.body.salePrice,
            discountAmount: req.body.discountAmount,
            carId: req.body.carId,
        }
        await db("sales").where("id", req.params.id).update(payload)
        const car = await db("sales").where("id", req.params.id).first()
        res.json(car)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        await db("sales").where("id", req.params.id).del()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router
