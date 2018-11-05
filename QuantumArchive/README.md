### Instructions

v.1.0.0 server that gives a basic response to different url requests

-To run this server, you can run "npm run test" or nodemon server.js

-To see the different responses to the http request, you must use a different url

-Base case: 'http://localhost:3000/' will respond with a welcome to the index page in the console and on the web page
-Admin: 'http://localhost:3000/admin' will respond with a 'welcome admin'
-Anything else: 'http://local:3000/<other>' by replacing <other> with any other url, it will respond back saying you requested it but that's it :(


v.1.1.0

-http server can now accept GET, POST and DELETE requests

-the server parses the url and determines what branch to take

-if you request with GET /users, it will return all users, if it is of the format GET /users/:id it will search for that given name within the store JSON objects
    -to test this out, look up names 'foo', 'bar', or 'qux'

-if you request with a POST request on users, you MUST upload valid JSON, it will listen for data, e.g. in your superagent request, make sure you tell it what you're sending, it will not parse out a query string :/ )

-if you wish to delete a resource, give the server a DELETE request with the user of the form /users/:id, it will then delete if it's in the array of resources and return the array after the data has been deleted

-you can set your request to 'text/plain' if you just want a string of data, otherwise it will return a JSON object to you