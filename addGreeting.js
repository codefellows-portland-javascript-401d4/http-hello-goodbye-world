
function add(pathname, response, querystring) {
    var arr = (querystring).split('=');
    response.write(arr[1]);
    response.end();
}
 
exports.add = add;




