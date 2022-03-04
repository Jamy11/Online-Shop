const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const { Users } =  require('../models')

router.post('/',(req,res)=>{
    const { email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        email: email,
        password: hash,
      });
      res.json("SUCCESS");
    });
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Users.findOne({ where: { email: email } });
  
    if (!user) res.json({ error: "User Doesn't Exist" });
  
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) res.json({ error: "Wrong email And Password Combination" });
  
      res.json("YOU LOGGED IN!!!");
    });
  });


module.exports = router