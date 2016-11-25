var figlet = require('figlet');
const message = {};

message.makeFiglet = function(message, figletFont) {
  return figlet.textSync(message, {
    font: figletFont,
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });
};

module.exports = message;
