const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { ProductCatagory, Shops, Products  } = require('../../models')
// register

router.post('/add-product-catagory', validateToken, async (req, res) => {

})

router.get('/', validateToken, async (req, res) => {
    const { id } = req.user
    const productCatagoryList = await ProductCatagory.findAll({ where: { UserId: id } })
    const shopList = await Shops.findAll({ where: { UserId: id } })
    res.json({productCatagoryList,shopList})
})



module.exports = router