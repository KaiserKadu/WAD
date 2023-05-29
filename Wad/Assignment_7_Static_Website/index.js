var http = require("http"); // Import Node.js core module
var fs = require("fs"); 
var path = require("path"); 

http.createServer(function (req, res) { // create web server
    if (req.url === "/") { // check the URL of the current request
      fs.readFile("./index.html", "UTF-8", function (err, html) { // read index.html file
        res.writeHead(200, { "Content-Type": "text/html" }); // write HTML to the response
        res.end(html); // send response and close connection
      });
    }
  })
  .listen(8080, () => { // Server object listens on port 8080
    console.log("Server started at: http://localhost:8080"); //the server object listens on port 8080
  });
