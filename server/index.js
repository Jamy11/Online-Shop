const express = require("express")
const app = express()
const cors = require("cors");



app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
const db = require('./models')

app.use("/auth", require('./routes/Auth'));

app.get('/', (req, res) => {
    res.send('Server Started!')
})

db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server Started For ${port}`)
    })
})
