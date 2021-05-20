const assert = require('chai').assert;
const axios = require('axios');
// var des = require('mocha').describe;
const app = require('../app');
const expect = require('chai').expect;

getVowelsResult = app.getVowels('kalas');

//Testing function Vowels
describe('App', function () {
    describe('Testing vowels counter', () => {
        it('should count the number of vowels in string', () => {
            assert.isAbove(getVowelsResult, 0);
        })
    })
})


describe('App', () => {


    //Testing /api/random, return obj: {key:num}
    describe('Testing randomNum', (done) => {
        it('should return statusCode 400', () => {
            axios
                .get('http://localhost:4000/api/random')

                .then((res) => {
                    console.log(res.data, parseInt(res.status))
                    expect(parseInt(res.status)).to.be.a('string');
                })


        })
    })
})

// it('returns status 200', () => {
//     //sent { text: "auei" } through axios request
//     axios.post(url, { text: "auei" })
//         .then(function (response) {
//             //managed to log response, it saved me :)
//             //console.log(response);
//             expect(response.status).to.equal(400);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// })