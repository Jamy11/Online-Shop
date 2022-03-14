const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { Users, Shops } = require('../../models')
// register

router.post('/add-shop', validateToken, async (req, res) => {
    const {id} = req.user
    const { name } = req.body
    Shops.create({
        name:name,
        UserId:id
    }).then(response=> res.json('SUCCESS')).catch(err=>{
        console.log(err)
        res.json({error:"Shop Name Must Be Unique."})
    })
})

router.put('/edit-profile', validateToken, async (req, res) => {

})



module.exports = router