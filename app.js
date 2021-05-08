// En webbserver skall skapas medelst node.js och valfritt/valfria ytterligare bibliotek.
// Den ska serva filer som ligger i en undermapp public/
// En kort dokumentation i form av kommentarer i koden som visar källor ni använt skall finnas med.

// GET /api/random -- Skall returnera ett JSON-objekt i formatet { “number”: tal }
// tal är ett nummer mellan 0 och 1023
// GET /api/custom_random/num -- skall returnera ett slumpmässigt tal mellan 0 
// och num enligt samma format som ovan.
// Skapa ytterligare en endpoint, fritt val. Vill ni verkligen utmana er, 
// så gör så att det tar emot en POST, hanterar datan, och spottar ur sig information, 
// t.ex räknar antalet vokaler.

// källor - Netninjas tutorial om Node 
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp


// importerar biblioteket express
const express = require('express');
//Alt. Kör functionen express och tilldelar det till en variabel, app
// skapar en variabel app och som innehåller express. Med det får variablen metoderna som behövs för att köra express.
const app = express();

//Skriver våra routes, svarar till /, och kör då funktionen som är vårt andra argument
// get() är en metod som hämtar. Det är en request metod som i detta fall hämtar
// root: __dirname pekar mot roten av projektet. det är därifrån man hämtar url vägen (typ, kanske)
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
app.get('/api/random', (req, res) => {
})

app.listen(4000);


//     } else if (req.url === '/api/ninjas') {
//         var ninjas = [{ name: 'Carl', age: 37 }, { name: 'Barbro', age: 52 }];
//         res.writeHead(200, { 'Content-type': 'application/json' })
//         res.end(JSON.stringify(ninjas));