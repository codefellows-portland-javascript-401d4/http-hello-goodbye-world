This is a simple http server with a couple of paths.

Entering the url '/' will take you to the home page.
    For this path, you will also be able to see the request method you sent. This currently only accepts 'GET' and 'POST' requests.

Entering '/blah' with query after (e.g. '/blah?blah=4') will take you to a page that writes out your query.

Entering '/goodbye' will take you to the goodbye page.

Otherwise, you will be sent to a default page which will tell you the url that you requested and write that you made a bad url request.
