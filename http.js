'use strict';

const http = require('http');
const fs = require('fs');
const indexHtml = fs.createReadStream('index.html');
const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  if (req.url === '/') {
    cowsay.say('hello, world');
  }
  else if (req.url === '/about') {
    cowsay.say('abooooot page');
  } else {
    res.end();
  }
});

const port = 8080;

server.listen(port, err => {
  if(err) console.log('ERROR!', err);
  else console.log('http server listening on port', port);
});

