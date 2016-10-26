'use strict';

const http = require('http');
const fs = require('fs');
const indexHtml = fs.createReadStream('index.html');
const cowsay = require('cowsay');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
var assert = chai.assert;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    console.log('hello, world');
  }
  else if (req.url === '/about') {
    console.log('abooooot page');
  } else {
    res.end();
  }
});

const port = 8080;

server.listen(port, err => {
  if(err) console.log('ERROR!', err);
  else console.log('http server listening on port', port);
});

