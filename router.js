function route(pathname, response) {
    console.log('About to route a request for ' + pathname);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var message = '504 error: file not found';
    if (pathname === '/hello'){
        message = 'Hellllllllo world!';
    }
    else if (pathname === '/goodbye'){
        message ='Goodbye, world!';
    }
    else if (pathname === '/'){
        message = 'Hello or goodbye?';   
    }
    response.write(message);
    response.end();
    return message;
}


exports.route = route;