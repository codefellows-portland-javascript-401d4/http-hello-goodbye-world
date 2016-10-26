const http = require('http');
const cowsay = require('cowsay');


const server = http.createServer((request, response) => {
    console.log(request.url);
    response.statusCode = 200;
    if (request.url === '/') {
        var hiMsg = cowsay.say({
            text: 'Hi!!!!',
            e: '00',
            T: 'U'
        });
        response.write(hiMsg);
        response.end();
    } else {
        var text = 'I\'m a cow and I think about ' + request.url.replace('/', '');
        var byeMsg = cowsay.say({
            text: text,
            e: 'Oo',
            T: 'U'
        });
       
        response.write(byeMsg);
        response.end();
    }

});



const port = 3000;

server.listen(port, err => {
    if (err) {console.log('error: ', err);}
    else {console.log('server listening on port: ', port);}
});