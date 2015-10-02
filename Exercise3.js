var fs = require('fs')

var path = process.argv[2];
var text = fs.readFileSync(path).toString();
var count =0;

//console.log(text);

for(i = 0;i<text.length;i++){
	if(text[i] = "\n") count++;
}

console.log(count);