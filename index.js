const express = require('express');
const app = express();

app.get('https://api-test1-5a9d.onrender.com', (req, res) => {
    res.end("APi done")
})

app.listen(4000,()=>console.log("The Server is  Running"));
