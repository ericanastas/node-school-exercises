var fs = require('fs');

var path = process.argv[2];
var text = fs.readFileSync(path).toString();

var count = text.split('\n').length-1;

console.log(count);