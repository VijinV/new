const express = require('express');
const app = express();
const mongoose = require('mongoose');

const user = require("./modal")


const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {

    const user1 = user.find()
    
    res.end(user1)
})

app.post('/', async (req, res) => {

    const {name} = req.body

    const user1 = new user({
        name: name
    })

    await user1.save()

    res.end(user1,"added successfully")

})



mongoose.connect("mongodb+srv://vfcvijin:111@new.j2g0m0h.mongodb.net/").then(()=>console.log("database connected"))

app.listen(4000,()=>console.log("The Server is  Running"));
