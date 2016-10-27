const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const assert = chai.assert;
const server = require("../lib/http-server");

let request = chai.request(server);

describe("simple http server", () => {

  
  // it("recognize non-GET attempt", function (done) {
    
  // });

  it("a path (/Members) responds appropriately using url.pathname", function (done) {
    request
            .get("/Members")
            .end((err, res) => {
              if (err) return done(err);
              assert.equal(res.text, "In /Members directory\nQuery membership with '?name=John+Doe'\n");
              done();
            });
 
  });

  // it("recognize queryData.name", function (done) {
    
  // });
  


    
  // it("sends back text with format=text in query string", done => {
  //   request
  //           .get("/?format=text")
  //           .end((err, res) => {
  //             if (err) return done(err);
  //             assert.equal(res.type, "text/plain");
  //             assert.equal(res.text, "{\"name\":\"foo\"}");
  //             done();
  //           });
  // });
});