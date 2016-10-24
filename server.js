const http = require('http');


const server = http.createServer(function(req, res){
    console.log(req.url);
    res.write('Hey world');
    res.end;
});

var port = 8080;

server.listen(function(thisport, err){
    thisport = port;
    if (err) console.log('error is ', err);
    else console.log('http server listening on port ', thisport);
});


module.exports = server;