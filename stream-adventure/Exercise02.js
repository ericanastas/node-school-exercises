var fs = require('fs');

var file = process.argv[2];


var fileStream = fs.createReadStream(file);

fileStream.pipe(process.stdout);


