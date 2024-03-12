In this repository, we use the `window.location` object to get information about various
parts of a URL. As we know `window.location` represents the current URL of the document being displyed. It provides specific information about a documents URL, including its properties like `protocol`, `host` and `port`. 

A server is created with Express.js. We the use the `express.static()` to serve static files from the `public` directory. This directory contains an `app.html` file where information about  `window.location` object properties are displayed.

When a request is made to the Express server, it checks if the requested URL matches the
path of a file within the `public` directory. If it does, Express will serve that file as response to the request. Since `window` is not available in a Node.js environment, we can 
get `window` to display the URL info in our backend Express/Node server.