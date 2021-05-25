const request = require('request')
const app = require('../app');
const funcFile = require('../public/func');
const expect = require('chai').expect;

let urlPath = 'http://localhost:4000/';

//Check if the users in the array is admin 
//
//Make a function that takes in an array with objects, the objects have information about the users, name, age, and admin/not Admin
//make sure they are admins - filter threw the array and take out the admin users
//A endpoint - /admin
//function places in func.js file and is exported
//In app.js we will make an endpoint and return an array with all the admin users - filtered in the func

describe('Testing admin endpoint', () => {
    let admin = 'admin';
    let adminPath = urlPath + admin;

    describe('Checking to see if all users are admin-users', () => {

        // Checking status code to be OK, 200
        it('should return statusCode 200', (done) => {
            request(adminPath, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        // Type of data
        describe('Returning JSON response, type of', () => {
            it('Should return a JSON type of', (done) => {
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
        // expect(add(1, 1)).toEqual(2);
        // expect(add(5, 7)).toEqual(12);
        // expect(add(-4, 5)).toEqual(1);

    })
});

describe('Calculate the value of two numbers', () => {
    let addNum = 'addnum';
    let addNumPath = urlPath + addNum;

    describe('Check if the numbers are added together', () => {
        it('should have an add method', (done) => {
            request(addNumPath, function (error, response, body) {
                expect(JSON.parse(response.body).sum).to.equal(8)
                done();
            })
        })

        describe('Returning JSON response, type of', () => {
            it('Should return a JSON type of', (done) => {
                request(addNumPath, function (error, response, body) {
                    console.log(response.headers['content-type'])
                    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                    done();
                })
            })

            describe('Check the status code', () => {
                // Checking status code to be OK, 200
                it('should return statusCode 200', (done) => {
                    request(addNumPath, function (error, response, body) {
                        expect(response.statusCode).to.equal(200);
                        done();
                    })
                })
            })
        })
    })
})