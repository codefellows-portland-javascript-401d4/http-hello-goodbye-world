Welcome to our crummy HTTP server!

Start the server by running index.js.

Requesting a "/" path will write the contents of our index.html file to the client's view.

Requesting other paths will generate a 404 response, as well as writing their requested PATH to their view.

Making "POST" request to the "/bacon" PATH with params will write those params to the page in JSON format (and return a JSON object????).