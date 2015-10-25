var fs = require('fs');
var path = require('path');

module.exports = function(dirPath,ext, callback){

fs.readdir(dirPath,function(err, list){
	
	if(err) return callback(err);
	
	var fileNames = [];
		
	for(var i=0; i<list.length;i++){
	
		var fileName = list[i];
	
		if(ext === path.extname(fileName).substring(1))
		{
			//console.log(fileName);	
			fileNames.push(fileName);
		}
	}
	
	callback(null, fileNames);
} );
	
	
	
	
}