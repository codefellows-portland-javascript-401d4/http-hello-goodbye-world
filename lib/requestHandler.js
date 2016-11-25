const handle = {};
const message = require('./message');
const cats = require('./cats');

handle['/'] = function(request, response) {
  response.write(message.makeFiglet('Hello World!'));
  response.end();
};

handle['/goodbye'] = function(request, response) {
  response.write(message.makeFiglet('Goodbye World', 'Ghost'));
  response.end();
};

handle.error = function(request, response) {
  response.write(message.makeFiglet(`${response.statusCode} PAGE NOT FOUND)`, 'Ghost'));
  response.end();
};

handle.query = function(id, request, response) {
  var queryResults = cats.findCatById(id);
  if(queryResults.length) {
    queryResults.forEach((cat) => {
      response.write(cat.name + ' the cat is ' + cat.age + ' years old!');
    });
  } else {
    response.write('sorry no cats match your search');
  }
  response.end();
};

handle.post = function(request, response) {
  response.write(message.makeFiglet('Thank you for posting!'));
  response.end();
};

module.exports = handle;
