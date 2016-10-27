const http = require('http');
const Url = require('url');
const qs = require('querystring');
const cowsay = require('cowsay');


const server = http.createServer((request, response) => {
    var url = Url.parse(request.url);
    var path = url.pathname.replace('/', '');
    var queryStr = url.query;
    var queryObj = qs.parse(queryStr);

    var badWords = ['beef', 'hamburger', 'stroganoff', 'meat', 'meatballs', 'hotdog', 'pastrami', 'brisket'];

    var cowObj = {
        text: '',
        e: '()',
        T: 'U'
    };

    if (request.method === 'POST') {
        var body = [];
        request.on('data', data => {
            body.push(data);
        }).on('end', () => {
            
            body = JSON.parse(Buffer.concat(body).toString());

            var msg = body.id + ' received.\n {\n';
            for (var key in body) {
                msg += key + ' : ' + body[key] + '\n';
            }
            msg += '}';

            cowObj.text = msg;
            response.write(cowsay.say(cowObj));
            response.end();
        });
    }
    
    else if (badWords.indexOf(path) !== -1) { // path includes any badWords
        response.statusCode = 404;
        response.statusMessage = 'Cows not found';
        response.end();
    } else if (queryStr) {
//maybe break this out into it's own module
        let msg = '';
// cool feature to add: use the banned words list in here, so you can't make the cow say I am meat.
        for (var key in queryObj) {
            if (queryObj[key] === 'true') {
                msg += 'I am ' + key + '.\n';
            }

            if (queryObj[key] !== 'false' && queryObj[key] !== 'true') {
                msg += 'I am ' + queryObj[key] + '.\n';
            }

            if (queryObj[key] === 'false') {
                msg += 'I am not ' + key  + '.\n';
            }
        }

        if (path) {
            msg += 'I like to think about ' + path + '.\n';
        }
        msg += 'Moooo.';
        cowObj.text = msg;
        response.write(cowsay.say(cowObj));
        response.end();
    } else if (path) {
        let msg = 'I am a cow and I like to think about ' + path +'.';
        cowObj.text = msg;
        response.write(cowsay.say(cowObj));
        response.end();
    } else if (!path) {
        cowObj.text = 'Moooo! Hi!';
        response.write(cowsay.say(cowObj));
        response.end();
    } 


});


module.exports = server;

