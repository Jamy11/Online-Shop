const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const { Users } =  require('../models')
const { sign } = require("jsonwebtoken");

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
  
    bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) res.json({ error: "Wrong email And Password Combination" });
      
      // have to add type to this
      const accessToken = sign(
        { email: user.email, id: user.id },
        "importantsecret"
      );
      res.json(accessToken);
    });
});

router.post("/verify", async (req, res) => {

});


module.exports = router