const express = require('express')
const router = express.Router()
const { validateToken } = require('../../middleware/AuthMiddleware')
const { Users } = require('../../models')
// register

router.get('/all-users', validateToken, async (req, res) => {
    const user = await Users.findAll()
    res.json(user)
})

router.delete('/delete/:id', validateToken, async (req, res) => {
    const id = req.params.id
    const result = Users.destroy({ where: { id: id } }).then(response => {
        res.json("SUCCESS")
    }).catch(err => {
        console.log(err)
        res.json()
    })
})


module.exports = router