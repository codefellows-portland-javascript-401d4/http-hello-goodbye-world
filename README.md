# http hello/goodbye lab1 for CodeFellows 401

### Creator
 - Tim Combs

### Project Functionality
  - This is a Code Fellows Lab Assignment to create a simple http server
  - Server will serve to browser different responses depending on the path selected
  - console.log will display different responses depending on path selected

### How To Use Codebase
  - This module uses Node, npm and the following modules:
    - net module from node
    - eslint, mocha, chai for testing
  - Make sure to run npm install from the directory to install dependencies
  - Please refer to the package.json for more info

  - To use this module, from the command line at the root of the directory type:
    ```
    $ npm start
    ``` 
  - Then open a browser window and navigate to the address localhost:8080/ 

### Use Cases
  - this code is a simple http server that runs on localhost:8080

  - navigating to localhost:8080/goodbye displays 'goodbye world, you asked for the path: /goodbye' and console.logs 'Goodbye World!' using figlet module
  - navigating to localhost:8080/hello displays 'hello world, you asked for the path: /hello' and console.logs 'Hello World!' using figlet module
  - navigating to localhost:8080/french-dip displays 'au jus!!!, you asked for the path: /french-dip' and console.logs 'au jus!!!' using figlet module

  - navigating to other localhost:8080/<something_else> displays 'there is no path at /<something_else> please check your map'
  

### Code Shape
  - This code has been vetted using Eslint and was reviewed by Code Fellows using Travis-CI

### Collborations/Questions/issues
  - Not currently looking for collaborators at this time
  - Any questions and concerns can be handled by opening an issue on the codebase

### License
  - Licensed under the MIT license - see LICENSE.md for more info
