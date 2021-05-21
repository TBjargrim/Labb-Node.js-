// källor - Netninjas tutorial om Node 
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp
const assert = require('chai').assert;
const request = require('request')
const expect = require('chai').expect;
// importerar biblioteket express
const express = require('express');
//importerar värden ifrån random-num komponentern. 
const randomNum = require('./public/num');
// console.log(randomNum.num)
// console.log(randomNum.randomNum)


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


//console.log(getVowels(req.body.name))

//Hanterar submitten från kontaktformulätet
app.post('/contact', function (req, res) {
    // console.log(req.body);
    // renderar en ny fil och skickar med datan från formuläret. Nya filen har nu tillgång till datan från formuläret
    res.render('contact-success', { data: req.body });
    console.log(req)
});
//skapar en ny endpoint, som retunerar värdet ifrån vår function i random-num-komponenten. Ett bestämt nummer


app.get('/api/random', (req, res) => {
    res.send({ number: parseInt(randomNum.getRandomNum(0, 1024).toFixed(0)) })
})
app.get('/people', (req, res) => {
    res.send(randomNum.getPeople('tess', 'goofy', 12))
    console.log(randomNum.getPeople('tess', 'goofy', 12))
})
//skapar en ny endpoint, som retunerar värdet ifrån vår function i random-num-komponenten. Ett slumpmässigt nummer
app.get('/api/custom_random/:num', (req, res) => {
    var num = req.params.num;
    // console.log(num)
    res.send({ number: parseInt(randomNum.getRandomNum(0, num)).toFixed(0) })
})

app.post('/vowels', function (req, res) {
    // console.log(req.body);
    res.send({ vowelCount: getVowels(req.body.word) });
});

module.exports = {
    getVowels: function (str) {
        let a = str.match(/[aeiou]/gi);
        return a === null ? 0 : a.length;
    }
}
app.listen(4000);