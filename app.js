require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');





//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Nicolas Quiroz :)',
        titulo: 'Curso de node'
    })
}),


app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Nicolas Quiroz :)',
        titulo: 'Curso de node'
    })
}),


app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Nicolas Quiroz :)',
        titulo: 'Curso de node'
    })
}),


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/back/404.html')
})



// ---------- Puerto ---------- 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})