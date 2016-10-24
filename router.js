function route(pathname, response) {
    console.log('About to route a request for ' + pathname);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if (pathname === '/hello'){
        console.log('hello hello hello');
        response.write('Hellllllllo world!');
        response.end();
    }
    else if (pathname === '/goodbye'){
        console.log('goodbye');
        response.write('Goodbye, world!');
        response.end();
    }
    else if (pathname === '/'){
        console.log('homepage');
        response.write('Hello or goodbye?');
        response.end();
    }
    else {
        console.log('not found');
        response.write('504: Page not found');
        response.end();
    }
}


exports.router = router;