# HTTP hello/goodbye world server

## Description

This simple server responds with different responses based on the URL:

`/` or `/hello` => `'Hello, world!'`

`/goodbye` => `'Goodbye, world!'`

`/hows-the-weather` => `'It's cool and rainy. :-('`

`/favorite?<thing>` => (returns the name of its favorite thing; ask it about bird, flower, mammal, or coffee)

You can try to POST a favorite, but don't be surprised if the server doesn't want to change its mind.

`/todo[?format=[text|json]]` => returns a list of things to do in either text or JSON format

If any other URL is given, it returns a 404 with a helpful error message.

## Code Example

If you specify the optional port number it will use that port; otherwise it will spin up on port 3000.
```
node http-hello-goodbye-world.js <port_num>
```

Then point your browser to `http://localhost:3000`, or `http://localhost:3000/<url>`.

## Motivation

This was written as a lab assignment for Code Fellows 401 class. The server spins up on port 3000.

## Tests

The accompanying test suite can be run using the 'npm test' command.

## Contributors

[Mark Greenwood](https://github.com/markgreenwood)

## License

The MIT License (MIT)
Copyright (c) 2016 Mark Greenwood

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
