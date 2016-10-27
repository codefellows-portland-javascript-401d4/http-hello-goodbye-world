const addGreeting = require('./addGreeting');

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
        else message ='Hola, Mundo.\n Query the time of day to get a more specific response.  Options are "time=morning", "time=afternoon", and "time=evening".';
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
    else if (pathname === '/new'){
       addGreeting.add(pathname, response, querystring);
    }

    else if (pathname === '/'){
        message = 'Which language would you like to be greeted in: \n English, Spanish, French, German, Swahili, or Mandarin?\n \n  To add your own enter "new" as the url and then query your language and greeting as a querystring.  \n\n   Example: /new?samoan=Talofa, le Lalolagi.';   
    }
    response.write(message);
    response.end();
    return message;
}

exports.route = route;