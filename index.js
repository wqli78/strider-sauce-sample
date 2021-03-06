var Hapi = require('hapi');

// Create a server with a host, port, and options
var port = process.env.PORT || 8000
var server = new Hapi.Server('localhost', parseInt(port, 10));

// Define the route
var index = {
    handler: function (request) {
      console.log("strider-sauce-sample: request on /")
      request.reply('<html><head><title>Page Title</title></head><body>this is a body</body></html>')
    }
};

// Add the route
server.addRoute({
    method : 'GET',
    path : '/',
    config : index
});

// Start the server
server.start();
console.log("hapijs server listening on port %d", port)
