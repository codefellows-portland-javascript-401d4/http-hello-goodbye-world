# HTTP hello/goodbye world server

## Description

This simple server responds with 'Hello, world!' if '/' or '/hello' is the URL, and 'Goodbye, world!' if '/goodbye' is the URL. If any other URL is given, it returns a 404.

## Code Example

```
node http-hello-goodbye-world.js
```

Then point your browser to http://localhost:3000, http://localhost:3000/hello, or http://localhost:3000/goodbye.

## Motivation

This was written as a lab assignment for Code Fellows 401 class. The server spins up on port 3000.

## Tests

No tests implemented yet. ~~The accompanying test suite can be run using the 'npm test' command.~~

## Contributors

[Mark Greenwood](https://github.com/markgreenwood)

## License

The MIT License (MIT)
Copyright (c) 2016 Mark Greenwood

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
