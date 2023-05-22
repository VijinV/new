const mongoose = require('mongoose');


const uSchema =new mongoose.Schema({
    name:{
        type:"String",
        required: true
    }
})


 
module.exports = mongoose.model("User", uSchema);