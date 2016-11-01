# http-hello-goodbye-world: coded by [Drew Stock] (https://github.com/DrewStock)
==================================================

Instructions: type 'npm start' in the command line to start app and run tests

This app does the following:
* response text of 'hello world' when you open (http://localhost:5000/hello) in a browser
* response text of 'you requested http://localhost:5000/goodbye Your response text is: goodbye world' when you open (http://localhost:5000/goodbye)in a browser
* response text of 'foo bar!' when query '?foo=bar' is added to URL path (http://localhost:5000/)
* response text of 'page not found' and response statusCode will be 404 when you open (http://localhost:5000/wtf)
* response text of 'page not found' and response statusCode will be 404 if URL is (http://localhost:5000/) or (http://localhost:5000/) is followed by any resource or query such as (http://localhost:5000/baz) 
