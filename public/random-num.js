function randomNum(min, max) {
    return Math.random() * (max - min) + 1;
}
var randomNum = { number: parseInt(randomNum(0, 1024).toFixed(0)) }//parseInt?
const num = { number: 897 }

//exporterar dessa värden till resten av filerna. 
module.exports = {
    randomNum: randomNum,
    num: num,
}