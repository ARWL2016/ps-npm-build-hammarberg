var app = module.exports = require("koa")(); 

app.use(function *() {
  this.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

// only start app if this is not run by the test
// in testing the test will start the application  
if(!module.parent) {
  app.listen();
}
console.log(`Application started on port ${port}`); 

// console.log("The process.argv[0] is " + process.argv[0]);
// console.log("The process.argv[1] is " + process.argv[1]);
// console.log("The process.argv[2] is " + process.argv[2]);
// console.log("The process.argv[3] is " + process.argv[3]);
// console.log("The process.argv[4] is " + process.argv[4]);
// console.log("The process.argv[5] is " + process.argv[5]);
// console.log("The process.argv[6] is " + process.argv[6]);


