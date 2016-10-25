const figlet = require('figlet');


function route(pathname, response) {
  console.log('Routing request for ' + pathname);

  figlet(pathname, (err, data) => {
    if (err) {
      console.log('You got an error: ', err);
    }
    response.write(data);
    response.end();
  });
}

exports.route = route;