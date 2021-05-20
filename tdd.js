module.exports = {
    getVowels: function (str) {
        let a = str.match(/[aeiou]/gi);
        return a === null ? 0 : a.length;
    }
}