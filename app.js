const express = require('express');
const hbs = require('express-handlebars')

const app = express();

//Handle Bars Middle Ware
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res)=>{
    const title = 'WELCOME TO VIDJOT'
    res.render('index', {title:title})
})

app.get('/about', (req, res)=>{
    res.render('about')
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`VidJot backend listening on http://localhost:${port}`)
});