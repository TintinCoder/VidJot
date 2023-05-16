const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello VidJot")
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`VidJot backend listening on http://localhost:${port}`)
});