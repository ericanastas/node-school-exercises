var fs = require('fs');
var path = require('path');


var dirPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirPath,
function(err, list)
{
	for(var i=0; i<list.length;i++){
	
	var fileName = list[i];
	
		if(ext == path.extname(fileName).substring(1))
		{
			console.log(fileName);	
		}
	}
} );