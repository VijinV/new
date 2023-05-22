const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    
    res.end("APi done")
})

app.listen(4000,()=>console.log("The Server is  Running"));
