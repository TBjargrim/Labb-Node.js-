function randomNum(min, max) {
    return Math.random() * (max - min) + 1;
}
var obj = { number: randomNum(0, 1024).toFixed(0) }

console.log(obj)

module.exports = obj;
// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi,
// }