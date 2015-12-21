var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

console.log("port = "+port);
console.log("filePath = "+filePath);

http.createServer(function(request,response)
{ 
    var stream = fs.createReadStream(filePath)
      
    stream.pipe(response);
    
}).listen(port)
