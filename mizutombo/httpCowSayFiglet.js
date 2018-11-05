const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const qs = require('querystring');
const cowsay = require('cowsay');
const figlet = require('figlet');
const indexHtml = fs.createReadStream('index.html');

// create new instance of http server
module.exports = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200; // http status code 200 = okay

  if (req.url === '') {
    indexHtml.pipe(res);
  }
  else if (req.url === '/happy_cow') {
    res.write('hello wonderful world!');
    console.log(cowsay.say({
      text : 'hello wonderful world!',
      e : '^^',
      T : 'U '
    }));
    res.end();
  }
  else if (req.url === '/angry_cow') {
    res.write('eat cow pies and die!!!');
    console.log(cowsay.say({
      text : 'eat cow pies and die!!!',
      e : '@@'
    }));
    res.end();
  }
  else if (req.url === '/halloween') {
    res.write('happy halloween!');
    figlet.text('Boo!', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('gremlins!');
        return;
      }
      console.log(data);
    });
    res.end();
  }

  // url query
  const url = parseUrl(req.url);
  if (url.pathname === '/spider') {
    const query = qs.parse(url.query);
    const type = query.format === 'text' ? 'text/plain' : 'application/json';
    res.setHeader('Content-Type', type);
    res.end(JSON.stringify('Spiders from Angry Red Planet Mars'));
  }

  else {
    if (req.url === '/') {
      res.write('404 - Not Found ==> try URLs ... /halloween or /happy_cow or /angry_cow');
    }
    res.end();
  }
});
