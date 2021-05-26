// källor - Netninjas tutorial om Node 
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp
const assert = require('chai').assert;
const request = require('request')
const expect = require('chai').expect;
// importerar biblioteket express
const express = require('express');
//importerar värden ifrån random-num komponentern. 
const funcFile = require('./public/func');

// importerar bodyParser - tar hand om bodyn i POST requestet och skickar vidare, "middleware"
const bodyParser = require('body-parser')
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

// skapar en variabel app och som innehåller express. Med det får variablen metoderna som behövs för att köra express.
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// använder ejs - html markup med ren javascript
app.set('view engine', 'ejs');
app.use(express.static('public'))
//Skriver våra routes, svarar till /, och kör då funktionen som är vårt andra argument
// get() är en metod som hämtar. Det är en request metod som i detta fall hämtar
// root: __dirname pekar mot roten av projektet. det är därifrån man hämtar url vägen
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', { root: __dirname });
});

app.get('/project', (req, res) => {
    res.sendFile('./public/project.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./public/contact.html', { root: __dirname });
});


//Hanterar submitten från kontaktformulätet
app.post('/contact', function (req, res) {
    // console.log(req.body);
    // renderar en ny fil och skickar med datan från formuläret. Nya filen har nu tillgång till datan från formuläret
    res.render('contact-success', { data: req.body });
    console.log(req)
});
//skapar en ny endpoint, som retunerar värdet ifrån vår function i random-num-komponenten. Ett bestämt nummer


app.get('/api/random', (req, res) => {
    res.send({ number: parseInt(funcFile.getRandomNum(0, 1024).toFixed(0)) })
})
app.get('/people/:firstName', (req, res) => {
    let newPerson = req.params.firstName
    // res.setHeader('Content-Type', 'application/json');
    // res.json(randomNum.getPeople(newPerson, 'Roswell', 12))
    res.send(funcFile.getPeople(newPerson, 'Roswell', 12))
})
//skapar en ny endpoint, som retunerar värdet ifrån vår function i random-num-komponenten. Ett slumpmässigt nummer
app.get('/api/custom_random/:num', (req, res) => {
    var num = req.params.num;
    res.send({ number: parseInt(funcFile.getRandomNum(0, num)).toFixed(0) })
})

app.get('/vowels/:city', function (req, res) {
    let city = req.params.city;
    res.send({ vowels: parseInt(funcFile.getVowels(city)) });
});

app.get('/admin', function (req, res) {
    let users = [
        { name: 'Lisa', userID: 1343, admin: true },
        { name: 'Lars', userID: 4224, admin: false },
        { name: 'Nalle', userID: 6332, admin: true },
        { name: 'Batman', userID: 1573, admin: true },
        { name: 'Tjejen', userID: 7297, admin: false },
        { name: 'Grabben', userID: 2815, admin: false },
        { name: 'Henrik', userID: 1111, admin: true },
    ];
    res.send('hej')
    //res.send(funcFile.isAdmin(users));

})
app.get('/addnum', function (req, res) {
    res.send({ sum: parseInt(funcFile.calculate(2, 6)) })

})
app.listen(4000);