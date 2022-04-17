const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { Users, Shops, Products } = require('../../models')
// register

router.get('/', async (req, res) => {
    const shops = await Shops.findAll()
    // console.log(shops)
    res.json(shops)
})

router.get('/selectedshop/:s_id', async (req, res) => {
    const s_id = req.params.s_id

    const shopProducts = await Shops.findOne({ where: { id: s_id }, include: [ Products] }) 

    res.json(shopProducts)
})



module.exports = router