const http = require('http');
const Url = require('url');
const qs = require('querystring');
const cowsay = require('cowsay');


const server = http.createServer((request, response) => {
    var url = Url.parse(request.url);
    var path = url.pathname.replace('/', '');
    var query = url.querystring;

    var badWords = ['beef', 'hamburger', 'stroganoff', 'meat', 'meatballs', 'hotdog', 'pastrami', 'brisket'];

    console.log('Url: ',url);
    console.log('path: ', path);
    console.log('querystring: ', query);

    var msg;
    var cowObj = {
        text: msg,
        e: '00',
        T: 'U'
    };

    var cow = {
        emotion: 'happy',
        breed: 'ascii',
        size: 'tiny'
    };

    
    if (badWords.indexOf(path) !== -1) { // path includes any badWords
        console.log('bad words', badWords.indexOf(path));
        response.statusCode = 404;
        response.statusMessage = 'Cows not found';
        console.log(response.statusCode); }
    // } else {
    //     response.write("COW COW COW");
    // }

});

module.exports = server;

