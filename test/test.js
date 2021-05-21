const assert = require('chai').assert;
const request = require('request')
const axios = require('axios');
// var des = require('mocha').describe;
const app = require('../app');
const expect = require('chai').expect;

getVowelsResult = app.getVowels('sandra');

const urlPath = 'http://localhost:4000/';

//Testing function Vowels
describe('Vowles testing', function () {
    describe('Testing vowels counter', () => {
        it('should count the number of vowels in string', () => {
            assert.isAbove(getVowelsResult, 0);
        })
    })
})

describe('Random number', () => {
    const random = 'api/random';
    const randomPath = urlPath + random;
    describe('Testing randomNum', () => {

        // Checking status code to be OK, 200
        it('should return statusCode 200', (done) => {
            request(randomPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        //Type of 
        describe('Returning JSON response, type of', () => {
            it('Should return a JSON type of', (done) => {
                request(randomPath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    // console.log(response.headers['content-type'])
                    done()
                })

            })
            //Check to see that the number is between 0-1023
            describe('Check to see that the number is between 0-1023', () => {
                it('Should return true or false', (done) => {
                    request(randomPath, function (error, response, body) {
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
describe('Custum random number', () => {
    const custumRandom = 'api/custom_random/';
    let num = 150;
    const custumRandomPath = urlPath + custumRandom + num;

    describe('Testing RandomNum and Num', () => {
        // const urlRandom = 'http://localhost:4000/api/custom_random/:num';
        // Checking status code to be OK, 200
        it('should return statusCode 200', (done) => {
            request(custumRandomPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        describe('Checking if endpoint /api/custom_random/:num is in JSON-format', () => {
            it('Should return a JSON type of', (done) => {
                request(custumRandomPath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done()
                })

            })
            //test with a set number, test if that number is lower. 
            describe('Is the number between 0 and choosen number', () => {
                it('return a random num between 0 and choosen num', (done) => {
                    request(custumRandomPath, function (error, response, body) {
                        // let url = 'http://localhost:4000/api/custom_random/'


                        // console.log(JSON.parse(response.body).number)
                        // console.log(response)
                        // console.log(num)
                        // Uncaught AssertionError: expected 'http://localhost:4000/api/custom_random/59' to be a number or a date
                        expect(JSON.parse(response.body).number).to.not.be.above(num);
                        //Find a better way then .to.not.be.above
                        done()
                    })
                })
            })
        })
    })
})

// body: [Object: null prototype] {
//     name: 'Sandra Persson',
//     email: 'sandraspersson@hotmail.com',
//     work: 'Front end'
//   },


//Test for contact endpoint,
//Check if it return 200
//Check if req.body has data and what kind of data
//Check 

describe('Contact endpoint testing', () => {
    const contactPath = 'contact';
    const contactURL = urlPath + contactPath;
    describe('It schould return status code 200', () => {
        it('should return status 200', (done) => {
            request(contactURL, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
    describe('Checking type of', () => {
        it('Should return JSON format', () => {
            request(contactURL, function (error, response, body) {
                console.log(response.req.body)
            })
        })
    })
})

//Test People
//StatusCode 200
// JSON format
// ???