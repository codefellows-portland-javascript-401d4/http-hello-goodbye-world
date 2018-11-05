const cats = require('./catData');
const figlet = require('./figlet');
const handle = {};

handle['/'] = function(request, response) {
  response.write(figlet.makeFiglet('What\'s up!', 'Graffiti'));
  response.end();
};

handle['/goodbye'] = function(request, response) {
  response.write(figlet.makeFiglet('See Ya!'));
  response.end();
};

handle.error = function(request, response) {
  response.write(figlet.makeFiglet(`${response.statusCode} Page Not Found`, 'Ghost'));
  response.end();
};

handle.query = function(id, request, response) {
  let results = cats.findById(id);
  if(results.length) {
    results.forEach((cat) => {
      response.write(figlet.makeFiglet(`Your cat's name is ${cat.name}`, 'Dancing Font'));
    });
  } else {
    response.write(figlet.makeFiglet('No cats, Go Fish!'));
  }
  response.end();
};

handle.post = function(request, response) {
  response.write(figlet.makeFiglet('Thanks for a new Cat!'));
  response.end();
};

module.exports = handle;