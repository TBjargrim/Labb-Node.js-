const assert = require('chai').assert;
const request = require('request')
const axios = require('axios');
// var des = require('mocha').describe;
const app = require('../app');
const expect = require('chai').expect;

getVowelsResult = app.getVowels('sandra');

//Testing function Vowels
describe('App', function () {
    describe('Testing vowels counter', () => {
        it('should count the number of vowels in string', () => {
            assert.isAbove(getVowelsResult, 0);
        })
    })
})

describe('App', () => {

    describe('Testing randomNum', () => {
        const url = 'http://localhost:4000/api/random';
        // Checking status code to be OK, 200
        it('should return statusCode 200', (done) => {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        //Type of 
        describe('Returning JSON response, type of', () => {
            it('Should return a JSON type of', (done) => {
                request(url, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    // console.log(response.headers['content-type'])
                    done()
                })

            })
            //Check to see that the number is between 0-1023
            describe('Check to see that the number is between 0-1023', () => {
                it('Should return true or false', (done) => {
                    request(url, function (error, response, body) {
                        expect(JSON.parse(body).number).to.be.above(-1).but.to.not.be.above(1023);
                        done()
                    })

                })
            })

        });
    })

})

//'/api/custom_random/:num'
//Output a number from the num you put into the url and 0
//Test if it return statuscode 200
//Test if it is returned in JSON-data
//Test if the value is a number inbetween choosen number and 0
describe('App', () => {

    describe('Testing RandomNum and Num', () => {
        const urlRandom = 'http://localhost:4000/api/custom_random/:num';
        // Checking status code to be OK, 200
        it('should return statusCode 200', (done) => {
            request(urlRandom, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        describe('Checking if endpoint /api/custom_random/:num is in JSON-format', () => {
            it('Should return a JSON type of', (done) => {
                request(urlRandom, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done()
                })

            })
            //test with a set number, test if that number is lower. 
            describe('Is the number we choose in the url inbetween 0- choosen number', () => {
                it('It should return a lower number', (done) => {
                    request(urlRandom, function (error, response, body) {
                        let url = 'http://localhost:4000/api/custom_random/'
                        let num = '59';
                        console.log(response.body)
                        let objNum = {
                            numbers: 39,
                        }
                        // Uncaught AssertionError: expected 'http://localhost:4000/api/custom_random/59' to be a number or a date
                        expect(url + num).to.not.be.above(objNum.numbers);
                        //Find a better way then .to.not.be.above
                        done()
                    })
                })

            })
        })
    })
})



//Value


    //Testing /api/random, return obj: {key:num}
    //     describe('Testing randomNum', () => {
    //         it('should return statusCode 400', () => {
    //             axios
    //                 .get('http://localhost:5000/api/random')

    //                 .then((res) => {
    //                     console.log(res.status)
    //                     expect(res.status).to.equal(400)
    //                 })
    //                 .catch(function (error) {
    //                     console.log(error);
    //                 });
    //         })
    //     })
    // 