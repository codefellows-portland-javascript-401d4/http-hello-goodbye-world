function start() {
    console.log("Request handler 'start' was called.");
}

function hello() {
    console.log("Request handler 'hello' was called."); 
}

function goodbye() {
    console.log("Request handler 'goodbye' was called."); 
}

exports.start = start;
exports.hello = hello;
exports.goodbye = goodbye;