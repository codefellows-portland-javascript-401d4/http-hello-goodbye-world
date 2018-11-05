const http = require("http");
const parseUrl = require("url").parse;
const qs = require("querystring");
const port = 8000;

module.exports = http.createServer(function(req, res) {
  
  const url = parseUrl(req.url);
  const queryData = url.parse(req.url, true).query;
  console.log("requested resource:", req.method, url.pathname);
  res.writeHead(200, {"Content-Type": "text/plain"});
	
  if (req.method === "GET") {

    if ( url.pathname === "/") {
    	res.write("In " + url.pathname + " directory\nThe only other valid directory is /Members\n");
  	} else if ( url.pathname === "/Members") {
  		res.write("In " + url.pathname + " directory\nQuery membership with '?name=John+Doe'\n");
  		
    if (queryData.name) {
				// user told us their name in the GET request, ex: ?name=John+Doe
      res.write("\nHello member " + queryData.name + "!\n");
    }

  	} else {
  			res.write("404 - Not Found\nI told you there are only / and /Members in this rinky-dink website!");
  		}
    res.end();
  } else {
			//non-GET method attempted
    res.write("405 - Method Not Allowed\nI'm not that kind of website!");
    res.end();
  }     

}).listen(port, err => {
  if(err) console.log("Error in setting up port!", err);
  else console.log("http server listening on port", port);
});
