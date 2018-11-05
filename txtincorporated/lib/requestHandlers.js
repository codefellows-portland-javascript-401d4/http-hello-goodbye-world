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

var badFont = (res, qFt) => {
  figMe('BOO!!!\n- - -\n404\n- - -\n NOT FOUND', {font: 'Ghost'}, (data) => {
    console.log('Request handler received unknown font query');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data + `\nSorry, but ${qFt} is not a font we know about.  Try again!`);
    res.end();
  });  
};

function hello(res, query) {
  if(query) {query = unescape(query);};
  let qFont = query;
  figMe('Hello World', {font: query || 'Broadway'}, (data) => {
    console.log('Request handler "hello" has been called.');
    if(data == 'BAD FONT') {badFont(res, qFont); return;};
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
};

function goodbye(res, query) {
  if(query) {query = unescape(query);};
  let qFont = query;  
  figMe('Goodbye World', {font: query || 'Dancing Font'}, (data) => {
    if(data == 'BAD FONT') {badFont(res, qFont); return;};    
    console.log('Request handler "goodbye" has been called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
};

function shalom(res, query) {
  if(query) {query = unescape(query);};
  let qFont = query;
  figMe('Shalom World', {font: query || 'Mshebrew210'}, (data) => {
    if(data == 'BAD FONT') {badFont(res, qFont); return;};    
    console.log('Request handler "shalom" has been called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
};

function fourohfour(href, res) {
  figMe('BOO!!!\n- - -\n404\n- - -\n NOT FOUND', {font: 'Ghost'}, (data) => {
    console.log('Request handler "fourohfour" has been called');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data + `\nSorry, but ${href} is not a URL we know about.`);
    res.end();
  });
};

exports.hello = hello;
exports.goodbye = goodbye;
exports.shalom = shalom;
exports.fourohfour = fourohfour;