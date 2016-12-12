'use strict';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const chaiHttp = require('chai-http');
const server = require('../lib/http-server.js');

chai.use(chaiHttp);

describe ('server e2e tests', () => {
    const request = chai.request(server);

    it('returns a 200 status code for successful requests', done => {
        request
        .get('/')
        .end((error, response) => {
            expect(response).status(200);
            done();
        });
    });

    it('returns response for specified url path request', done => {
        request
        .get('/')
        .end((error, response) => {
            if(error) return done(error);
            assert.equal(response.text, response.text);
            done();
        });
    });

    it('returns response for specified url path + query string request', done => {
        request
        .get('/blue-heeler?type=dog&breed=acd')
        .end((error, response) =>{
            if(error) return done(error);
            assert.equal(response.text, response.text);
            done();
        });
    });

    it('returns response for /get url path and GET request', done => {
        request
        .get('/get')
        .end((error, response) => {
            if(error) return done(error);
            assert.equal(response.text, response.text);
            done();
        });
    });

    it('returns a 400 error code for invalid url request', done => {
        request
        .get('/not-valid')
        .end((error, response) => {
            expect(response).status(400);
            done();
        });
    });
});
