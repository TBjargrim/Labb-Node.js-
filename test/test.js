// const assert = require('chai').assert;
// const axios = require('axios');
const request = require('request')
const app = require('../app');
const numFile = require('../public/num');
const expect = require('chai').expect;

const urlPath = 'http://localhost:4000/';

// ________________________________ Vowels test ________________________________

//Checking Vowels endpoint 
describe('Vowels endpoint', () => {
    // putting the function in a variable and adding a value
    let getVowelsResult = numFile.getVowels('Halleluja');

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
            //Check to see that the response is an object
            describe('Check if the output is an object', () => {
                it('Should return an object', (done) => {
                    request(vowelsPath, function (error, response, body) {
                        console.log(response.body)
                        expect(JSON.parse(response.body)).to.be.a('object')
                        done()
                    })
                })
            })

            // Checking the getVowels func to see if it counts vowels in string
            describe('Testing vowels func', () => {
                it('should count the number of vowels in string', () => {
                    expect(getVowelsResult).to.be.above(0)
                })
            })
        })
    });
})

// ________________________________ Random number test ________________________________

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

// ________________________________ Custum random number test ________________________________

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

// ________________________________ People test ________________________________
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

// ____________________________________ beginning of test - fail _______________________________
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