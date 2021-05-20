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
        const url = 'http://localhost:5000/api/random';
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