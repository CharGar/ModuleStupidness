
var http = require('http'); // get a module
var aNumber = require('./randomnumber'); // exported a function
var usdvalue = require('./usdvalue'); // exported an object
var output = require('./output');

http.createServer(function (req, res) {
  res.writeHead(200); // HEAD
  res.write('' + usdvalue(aNumber()));
  res.end();
}).listen(3000);
