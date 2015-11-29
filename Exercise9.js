//This is just a test of SourceTree on my laptop

var http = require("http");
var bl = require('bl');


var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];

var results = [];


var returned = 0;

for(var i=0; i<urls.length;i++){
	
	var url = urls[i];
		
	http.get(url,function(response){
	
		response.pipe(bl(function(err,data){
			if(err) console.error('There was an error!',err);
			var dataStr = data.toString();
			
			
			results[i] = dataStr;
			
			if(results.length = results.length){
				for(var j=0; i<results.length;i++){
					console.log(results[j]);
				}	
			}
		}
		)); //End of response.pipe()		
		
			
	}); //End of http.get()
}



