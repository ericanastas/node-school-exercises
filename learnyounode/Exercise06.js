var readDirFiltered = require('./readDirFiltered');

var dirPath = process.argv[2];
var ext = process.argv[3];

//console.log("dirPath = "+dirPath);
//console.log("ext = "+ext);

readDirFiltered(dirPath,ext, function(err, list)
{
	if(err) console.error('There was an error!',err);
	
	for(var i=0; i<list.length;i++){
		//console.log(list[i]);
		console.log(list[i]);	
	}
} );