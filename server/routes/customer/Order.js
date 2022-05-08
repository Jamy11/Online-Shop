const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { Users, Shops, Products, Orders, OrderItems } = require('../../models')
// register

router.get('/', async (req, res) => {
    const shops = await Shops.findAll()
    // console.log(shops)
    res.json(shops)
})

router.get('/selectedshop/:s_id', async (req, res) => {
    const s_id = req.params.s_id

    const shopProducts = await Shops.findOne({ where: { id: s_id }, include: [Products] })

    res.json(shopProducts)
})

router.post('/placeorder', validateToken, async (req, res) => {
    const { id } = req.user
    const { total_cost, currentCart } = req.body
    const OrderUniqueId = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)
    // console.log(currentCart)
    Orders
        .create({
            amount_paid: 0,
            total_cost: total_cost,
            OrderUniqueId,
            UserId: id
        }).then(response => {
            currentCart.map(item => {
                OrderItems.create({
                    quantity: item.quantity,
                    price: item.price,
                    OrderUniqueId: OrderUniqueId,
                    ProductId: item.id,
                }).then(response => {

                }).catch(err => {
                    console.log(err)
                })
            })
        }).catch(err => {
            console.log(err)
            res.json({ error: "Order Placing Failed." })
        })

    res.json("SUCCESS")
})


module.exports = router