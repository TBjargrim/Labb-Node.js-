const assert = require('chai').assert;
const request = require('request')
const axios = require('axios');
// var des = require('mocha').describe;
const app = require('../app');
const expect = require('chai').expect;

// let getVowelsResult = app.getVowels('sandra');

const urlPath = 'http://localhost:4000/';

// //Testing function Vowels
// describe('Vowles testing', function () {
//     describe('Testing vowels counter', () => {
//         it('should count the number of vowels in string', () => {
//             assert.isAbove(getVowelsResult, 0);
//         })
//     })
// })
//Checking Vowels endpoint 
describe('Vowels endpoint', () => {
    const vowels = 'vowels/Istanbul';
    const vowelsPath = urlPath + vowels;
    describe('Testing vowels enpoint to return 200', () => {

        // Checking status code to be OK, 200
        it('should return statusCode 200', (done) => {
            request(vowelsPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        // Type of data
        describe('Returning JSON response, type of', () => {
            it('Should return a JSON type of', (done) => {
                request(vowelsPath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done()
                })

            })
            //Check to see that its the correct amount of vowels showing. Should return 3
            describe('Check to that it´s the right amount of vowels showing', () => {
                it('Return correct number', (done) => {
                    request(randomPath, function (error, response, body) {
                        console.log(JSON.parse(body))
                        let city = JSON.parse(response.body)
                        // let parsedCity = JSON.parse(city)
                        expect(city).to.equal({
                            "VowelsInCityName": 3
                        });
                        done()
                    })

                })
            })

        });
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
                        let number = JSON.parse(response.body).number
                        let parsedNumber = JSON.parse(number)
                        expect(parsedNumber).to.be.at.most(num);
                        done()
                    })
                })
            })
        })
    })
})

//Test People
//StatusCode 200
// JSON format

describe('People endpoint testing', () => {
    // const peoplePath = 'people';
    const peopleURL = 'http://localhost:4000/people/therese';
    // const checkName = 'therese';
    // const peoplePersonURL = urlPath + peoplePath + checkName;

    describe('It schould return status code 200', () => {
        it('should return status 200', (done) => {
            request(peopleURL, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        describe('Checking type of', () => {
            it('Should return JSON format', (done) => {
                request(peopleURL, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done();
                })
            })
            // Check if the name in the url path is the same as in the object, expect people[5].firstName = to be the same as the url path
            describe('Check so the name in the url renders', () => {
                it('Show params in last object in array, "therese"', (done) => {
                    request(peopleURL, function (error, response, body) {
                        expect(JSON.parse(response.body)[5].firstName).to.equal('therese');
                        done();
                    })
                })
            })
        })
    })
})

//Test for contact endpoint,
//Check if it return 200
//Check if req.body has data and what kind of data
//Check 

// body: [Object: null prototype] {
//     name: 'Sandra Persson',
//     email: 'sandraspersson@hotmail.com',
//     work: 'Front end'
//   },

// describe('Contact endpoint testing', () => {
//     const contactPath = 'contact';
//     const contactURL = urlPath + contactPath;
//     describe('It schould return status code 200', () => {
//         it('should return status 200', (done) => {
//             request(contactURL, function (error, response, body) {
//                 expect(response.statusCode).to.equal(200);
//                 done();
//             })
//         })
//     })
//     describe('Checking type of', () => {
//         it('Should return JSON format', () => {
//             request(contactURL, function (error, response, body) {
//                 console.log(response.req.body)
//             })
//         })
//     })
// })