//Källor:
// https://dev.to/rafinskipg/a-beginners-guide-to-tdd-javascript-2oj9
// https://www.youtube.com/watch?v=u5cLK1UrFyQ&t=1469s
// https://www.youtube.com/watch?v=MLTRHc5dk6s

const request = require('request')
const app = require('../app');
const funcFile = require('../public/func');
const expect = require('chai').expect;

let urlPath = 'http://localhost:4000/';

//___________________________________ admin users endpoint ___________________________________

//Check if the users in the array is admin 
//Make a function that takes in an array with objects, the objects contains information about the users: name, userID and admin/not Admin
//Make sure they are all admins - filter threw the array and make sure they are admin users
//An endpoint - /admin
//function will be placed in func.js file and will be exported to app.js
//In app.js we will make an endpoint that renders an array with all the admin users - filtered in the func

describe('Testing admin endpoint', () => {
    let admin = 'admin';
    let adminPath = urlPath + admin;

    describe('Check the statuscode', () => {
        // Checking status code to be OK, 200
        it('Should return statusCode 200', (done) => {
            request(adminPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        // Type of data
        describe('Checking if endpoint is in JSON-format', () => {
            it('Should return a JSON response', (done) => {
                request(adminPath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done()
                })
            })
            //Are all the users in the array admins?
            describe('Check if the users in the array are admin', () => {
                it('Should return all admin users', (done) => {
                    request(adminPath, function (error, response, body) {
                        for (var i = 0; i < JSON.parse(response.body); i++) {
                            expect(JSON.parse(response.body)[i].admin).to.be.true;
                        }
                        done()
                    })
                })
            })
        })
    })
});

//___________________________________ calculate numbers endpoint ___________________________________

//Make a function that adds two numbers and returns the value
//function is exported from func.js file and is executed in app.js
//make an endpoint - /addnum
//test to see if the numbers are added correctly

describe('Calculate the value of two numbers', () => {
    let addNum = 'addnum';
    let addNumPath = urlPath + addNum;

    describe('Check the status code', () => {
        // Checking status code to be 200
        it('should return statusCode 200', (done) => {
            request(addNumPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        // return a resonse in JSON format
        describe('Checking if endpoint is in JSON-format', () => {
            it('Should return a JSON response', (done) => {
                request(addNumPath, function (error, response, body) {
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done();
                })
            })
            // The value in the object should be equal to 8
            describe('Check if the numbers are added together', () => {
                it('should have an add method', (done) => {
                    request(addNumPath, function (error, response, body) {
                        expect(JSON.parse(response.body).sum).to.equal(8)
                        done();
                    })
                })
            })
        })
    })
})