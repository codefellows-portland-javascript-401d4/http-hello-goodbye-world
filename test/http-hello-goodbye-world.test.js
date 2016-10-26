const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const test_server = require('../lib/HttpHelloGoodbyeServer');

describe ('HTTP server', function() {

  let request = chai.request(test_server);

  it('GET "/" returns "Hello, world!"', (done) => {
    request
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });

  it('GET "/hello" also returns "Hello, world!"', (done) => {
    request
      .get('/hello')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });

  it ('GET "/goodbye" returns "Goodbye, world!"', (done) => {
    request
      .get('/goodbye')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Goodbye, world!');
        done();
      });
  });

  it ('GET "/hows-the-weather" returns "It\'s cool and rainy. :-("', (done) => {
    request
      .get('/hows-the-weather')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('It\'s cool and rainy. :-(');
        done();
      });
  });

  it ('GET "/junk" returns a 404 error', (done) => {
    request
      .get('/junk')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  const expected_todo_list = {
    task1: 'Learn about Promises',
    task2: 'Complete the lab',
    task3: 'Read about REST APIs',
    task4: 'Do a big project'
  };

  it ('GET "/todo" returns a list of tasks as text (stringified JSON)', (done) => {
    request
      .get('/todo')
      .end((err, res) => {
        expect(res).to.be.text;
        expect(JSON.parse(res.text)).to.deep.equal(expected_todo_list);
        done();
      });
  });

  it ('GET "/todo?format=json" returns a list of tasks as a JSON object', (done) => {
    request
      .get('/todo?format=json')
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.deep.equal(expected_todo_list);
        done();
      });
  });

  it ('GET "/favorite?bird" returns "Red-tailed hawk"', (done) => {
    request
      .get('/favorite?bird')
      .end((err, res) => {
        expect(res.text).to.equal('Red-tailed hawk');
        done();
      });
  });

  it ('GET "/favorite?coffee" returns "Sulawesi"', (done) => {
    request
      .get('/favorite?coffee')
      .end((err, res) => {
        expect(res.text).to.equal('Sulawesi');
        done();
      });
  });

  it ('POST "/favorite?coffee=Kenya" returns "Sorry, not changing my favorite to Kenya!"', (done) => {
    request
      .post('/favorite?coffee=Kenya')
      .end((err, res) => {
        expect(res.text).to.equal('Sorry, not changing my favorite to Kenya!');
        done();
      });
  });

});