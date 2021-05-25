function getRandomNum(min, max) {
    return Math.random() * (max - min) + 1;
}
var randomNum = { number: parseInt(getRandomNum(0, 1024).toFixed(0)) }//parseInt?
const num = { number: 897 }

function getPeople(name, lastName, age) {
    const people = [
        { firstName: "John", lastName: "Doe", age: 46 },
        { firstName: "Maddy", lastName: "Jones", age: 12 },
        { firstName: "Paddy", lastName: "Rabbit", age: 79 },
        { firstName: "Sandy", lastName: "Coldsaw", age: 22 },
        { firstName: "Felix", lastName: "Jokuläinen", age: 37 },
        { firstName: name, lastName: lastName, age: age },
    ]
    // const firstNames = people.map((i) => i.firstName);
    // const lastNames = people.map((i) => i.lastName);
    return people;
}

function getVowels(city) {
    let a = city.match(/[aeiou]/gi);
    return a === null ? 0 : a.length;
}


function isAdmin(arr) {
    const adminUsers = arr.filter(user => user.admin === true);
    return adminUsers;
}

function calculate(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

//exporterar dessa värden till resten av filerna. 
module.exports = {
    randomNum: randomNum,
    num: num,
    getRandomNum,
    getPeople,
    getVowels,
    isAdmin,
    calculate
}

