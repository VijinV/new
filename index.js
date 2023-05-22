const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.get('https://api-test1-5a9d.onrender.com', (req, res) => {
    
    res.send("APi done")
})

app.listen(4000,()=>console.log("The Server is  Running"));
