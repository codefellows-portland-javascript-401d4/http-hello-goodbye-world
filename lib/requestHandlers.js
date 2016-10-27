var figlet = require('figlet');
var unescape = require('querystring').unescape;

var figMe = (mssg, styles, cb) => {
  figlet(mssg, styles, (err, data) => {
    if(err) {
      console.log('Something went wrong...');
      console.dir(err);
      data = 'BAD FONT';
      cb(data);
      return;
    }
    cb(data);
  });
};

var badFont = (response, qFt) => {
  figMe('BOO!!!\n- - -\n404\n- - -\n NOT FOUND', {font: 'Ghost'}, (data) => {
    console.log('Request handler received unknown font query');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data + `\nSorry, but ${qFt} is not a font we know about.  Try again!`);
    response.end();
  });  
};

function hello(response, query) {
  if(query) {query = unescape(query);};
  let qFont = query;
  figMe('Hello World', {font: query || 'Broadway'}, (data) => {
    if(data == 'BAD FONT') {badFont(response, qFont); return;};
    console.log('Request handler "hello" has been called.');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data);
    response.end();
  });
};

function goodbye(response, query) {
  if(query) {query = unescape(query);};
  let qFont = query;  
  figMe('Goodbye World', {font: query || 'Dancing Font'}, (data) => {
    if(data == 'BAD FONT') {badFont(response, qFont); return;};    
    console.log('Request handler "goodbye" has been called');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data);
    response.end();
  });
};

function shalom(response, query) {
  if(query) {query = unescape(query);};
  let qFont = query;
  figMe('Shalom World', {font: query || 'Mshebrew210'}, (data) => {
    if(data == 'BAD FONT') {badFont(response, qFont); return;};    
    console.log('Request handler "shalom" has been called');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data);
    response.end();
  });
};

function fourohfour(href, response) {
  figMe('BOO!!!\n- - -\n404\n- - -\n NOT FOUND', {font: 'Ghost'}, (data) => {
    console.log('Request handler "fourohfour" has been called');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(data + `\nSorry, but ${href} is not a URL we know about.`);
    response.end();
  });
};

exports.hello = hello;
exports.goodbye = goodbye;
exports.shalom = shalom;
exports.fourohfour = fourohfour;