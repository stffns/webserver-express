const express = require('express')

const hbs = require("hbs");
require('./hbs/helpers');

const port = process.env.PORT || 3000

const app = express();


hbs.registerPartials( __dirname + '/views/parciales');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'JAYSON STEFFENS'
    });
})

app.get('/about', function (req, res) {
    res.render('about');
})

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`);
})