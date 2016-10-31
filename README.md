# README
## HTTP-Hello/Goodbye-World

This library uses the figlet **Node.js** package to display three sample messages in figletized form with fonts set either by default or by user selection in the browser nav bar query string.

### DEFAULT MODE
To run in default mode simply run `node index.js` or `nodemon index.js` from the command line, and then open a browser window.  In the destination bar, type `localhost:8888` or `localhost:8888/hello` and hit `enter` to see a hello message in the browser, or `localhost:8888/goodbye` and `enter` to see a goodbye.  

**NEW!** Additionally, you can now type `localhost:8888/shalom` to see the message "Shalom World" in very poorly rendered Hebrew letters.  *Handy!*  

**NOTE** That improved 404 support has been added for URLs that do not resolve to any available route.  Users typing, for example, `localhost:8888/aloha` will now see a fully figletized 404 message followed by the apology "Sorry, but /aloha is not a URL that we know about."

### FONT SELECTION 
To select any available figlet font for message display, add a `?` after the url pathname and then the name of the font.  For example, to use **Dancing Font** on the `/hello` path, type `/hello?Dancing Font`.  The library will handle the percent-encoded space characters on the fly when locating the font file in `node_modules` and the message will display properly.  The default fonts used are **Broadway**, **Dancing Font**, and **Ghost**.  The other available figlet fonts can be found inside the project root in `/node_modules/figlet/fonts`.

### FONT ERROR HANDLING
If a font is unavailable the user's request will be redirected to a 404 notification similar to the one described above with the message that, for example in the case of a font called "foo", "Sorry, but foo is not a font that we know about. Try again!"  If both the URL and the font are unavailable, the URL 404 route will prevail.

### ALLOWED REQUEST METHODS
GET and HEAD are currently the only allowed request methods.  Connecting with other methods will return a *405 Not allowed* message.
