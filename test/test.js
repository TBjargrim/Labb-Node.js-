const request = require('request')
const app = require('../app');
const funcFile = require('../public/func');
const expect = require('chai').expect;

let urlPath = 'http://localhost:4000/';

// ________________________________ Vowels test ________________________________

//Checking Vowels endpoint 
describe('Vowels endpoint', () => {
    // putting the function in a variable and adding a value
    let getVowelsResult = funcFile.getVowels('Halleluja');

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
        // Checking if the resonse is JSON format
        describe('Returning JSON response', () => {
            it('Should return a JSON response', (done) => {
                request(vowelsPath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done()
                })

            })
            //Check to see that the response is an object
            describe('Check if the output is an object', () => {
                it('Should return an object', (done) => {
                    request(vowelsPath, function (error, response, body) {
                        expect(JSON.parse(response.body)).to.be.a('object')
                        done()
                    })
                })
            })

            // Checking the getVowels func to see if it counts vowels in the string
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
        // Checking if the resonse is JSON format 
        describe('Returning JSON response', () => {
            it('Should return a JSON response', (done) => {
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

// ________________________________ Custum random number ________________________________

describe('Custum random number', () => {
    const custumRandom = 'api/custom_random/';
    let num = 150;
    const custumRandomPath = urlPath + custumRandom + num;

    describe('Testing RandomNum and Num', () => {
        // Checking status code to be 200
        it('Should return statusCode 200', (done) => {
            request(custumRandomPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        describe('Checking if endpoint is in JSON-format', () => {
            it('Should return a JSON response', (done) => {
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

//Testing the people function. An array with people.
//When a name is entered in the url its added to the last object in the people array

describe('People endpoint testing', () => {
    const name = 'people/therese';
    const peoplePath = urlPath + name;

    describe('It schould return status code 200', () => {
        it('Should return status 200', (done) => {
            request(peoplePath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        describe('Checking if resonse is JSON format', () => {
            it('Should return JSON format', (done) => {
                request(peoplePath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done();
                })
            })
            // Check if the name in the url path is the same as in the object, expect people[5].firstName = to be the same as the end of the url path
            describe('Check that the name in the url renders', () => {
                it('return the value of the key, firstName, in the last object', (done) => {
                    request(peoplePath, function (error, response, body) {
                        expect(JSON.parse(response.body)[5].firstName).to.equal('therese');
                        done();
                    })
                })
            })
        })
    })
})
