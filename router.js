function route(pathname, response, querystring) {
    console.log('About to route a request for ' + pathname);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var message = '504 error: file not found';
    if (pathname === '/English'){
        message = 'Hello world.';
    }
    else if (pathname === '/Spanish'){
        if(querystring === 'time=morning'){
            message = 'Buenos dias, Mundo'; 
        }
        else if(querystring === 'time=afternoon'){
            message = 'Buenos tardes, Mundo'; 
        }
        else if (querystring === 'time=evening'){
            message = 'Buenos noches, Mundo'; 
        }
        else message ='Hola, Mundo.';
    }
    else if (pathname === '/French'){
        message ='Bonjour le monde.';
    }
    else if (pathname === '/German'){
        message ='Hallo Welt.';
    }
    else if (pathname === '/Swahili'){
        message ='Salamu, Dunia.';
    }
    else if (pathname === '/Mandarin'){
        message ='Ni hao, Shijie.';
    }
    else if (pathname === '/'){
        message = 'Which language; English, Spanish, French, German, Swahili, or Mandarin?';   
    }
    response.write(message);
    response.end();
    return message;
}

exports.route = route;