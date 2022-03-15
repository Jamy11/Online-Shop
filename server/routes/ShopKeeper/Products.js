const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { ProductCatagory, Shops, Products, Users } = require('../../models')
// register

router.post('/add-product-catagory', validateToken, async (req, res) => {
    const { id } = req.user
    const data = req.body
    Products.create({ ...data, UserId: id })
        .then(response => res.json("success"))
        .catch(err => {
            console.log(err)
            res.json({ error: "failed" })
        })
})

router.get('/', validateToken, async (req, res) => {
    const { id } = req.user
    const productCatagoryList = await ProductCatagory.findAll({ where: { UserId: id } })
    const shopList = await Shops.findAll({ where: { UserId: id } })
    res.json({ productCatagoryList, shopList })
})

router.get('/get-all-product', validateToken, async (req, res) => {
    const { id } = req.user
    // const product = await Products.findAll({
    //     include: [{
    //         model: Users,
    //         attributes: ['id']
    //     }]
    // }).then(response => {
    //     console.log(response);
    //     res.send({ response });
    // }).catch(err => {
    //     console.log('Oops! something went wrong, : ', err);
    // })
    const product = await Products.findAll({ where: { UserId: id }, include: [Users, Shops, ProductCatagory] })
        .then(response => {
            // console.log(response);
            res.send(response);
        }).catch(err => {
            console.log('Oops! something went wrong, : ', err);
            res.send({ error: 'Oops! something went wrong' });
        })
})

router.delete('/delete/:id', validateToken, async (req, res) => {
    const id = req.params.id
    // console.log(id)
    const result = Products.destroy({ where: { id: id } }).then(response => {
        res.json("SUCCESS")
    }).catch(err => {
        console.log(err)
        res.json()
    })
})


module.exports = router