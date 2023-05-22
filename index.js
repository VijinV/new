const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end("APi done")
})

app.listen(4000,()=>console.log("The Server is  Running"));
