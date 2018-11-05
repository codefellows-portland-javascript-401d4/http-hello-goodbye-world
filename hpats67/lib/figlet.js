const figlet = require('figlet');
const figged = {};

figged.makeFiglet = function(message, figletFont) {
  return figlet.textSync(message, {
    font: figletFont,
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });
};

module.exports = figged;