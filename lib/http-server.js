const http = require('http');
const fs = require('fs');
const parseUrl = require('url').parse;
const qs = require('querystring');

module.exports = http.createServer((request, response) => {
  const url = parseUrl(require.url);
  console.log('requested resource:', req.method, url.pathname);

  const query = qs.parse(url.query);
  console.log('query as string', url.query);
  
  const type = query.format === 'text' ? 'text/plain' : 'application/json';
  res.setHeader('Content-Type', type);
  res.end(JSON.stringify({name: 'foo'}));
});