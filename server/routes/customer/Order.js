const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { Users, Shops } = require('../../models')
// register

router.get('/', async (req, res) => {
    const shops = await Shops.findAll()
    // console.log(shops)
    res.json(shops)
})

router.put('/asda', validateToken, async (req, res) => {

})



module.exports = router