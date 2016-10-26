const http = require('http');

const todo_list = {
  task1: 'Learn about Promises',
  task2: 'Complete the lab',
  task3: 'Read about REST APIs',
  task4: 'Do a big project'
};

module.exports = http.createServer((req, resp) => {
  // console.log(`Received request for ${req.url}`);
  const responses = {
    '/': 'Hello, world!',
    '/hello': 'Hello, world!',
    '/goodbye': 'Goodbye, world!',
    '/hows-the-weather': 'It\'s cool and rainy. :-(',
    '/todo': JSON.stringify(todo_list)
  };

  resp.statusCode = 200;
  if (req.url in responses) {
    resp.write(responses[req.url]);
  }
  else {
    resp.statusCode = 404;
    resp.write(`I don't know the URL ${req.url}. Please request /hello, /hows-the-weather, or /goodbye`);
  }
  resp.end();
});