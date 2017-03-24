var app = require("../"); 
var request = require("supertest").agent(app.listen()); 

describe("Our amazing site", function () {
  it("has a welcome message", function (done) {
    request
      .get('/')
      .expect('Koa says Hi!')
      .end(done); 
  });
});