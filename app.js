const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello VidJot")
})

app.get('/about', (req, res)=>{
    res.send('Welcome to the about page!!\n VidJot is used to jot your video ideas on the web')
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`VidJot backend listening on http://localhost:${port}`)
});