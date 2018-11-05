const http = require('http');
const bodyReader = require('./body-reader');

module.exports = http.createServer((req,res) => {
  bodyReader(req, (err, cat) => {
    if(err){
      res.statusCode = 400;
      res.end(err.message);
    }
    else{
      res.statusCode = 200;
      console.log(cat);
      res.end(`your cat is named ${cat.name}`);
    }
  });
});
