var http = require("http");
var bl = require('bl');
var url = process.argv[2];

//console.log("url = "+ url);

http.get(url,function(response){
	
	response.pipe(bl(function(err,data){
		if(err) console.error('There was an error!',err);
		var dataStr = data.toString();
		console.log(dataStr.length);
		console.log(dataStr);
		}
	));
});