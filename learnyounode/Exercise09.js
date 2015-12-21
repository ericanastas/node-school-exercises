var http = require("http");
var bl = require('bl');

//Reads input URls
var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];

var results = [];

//console.log("urls[0]="+urls[0]);
//console.log("urls[1]="+urls[1]);
//console.log("urls[2]="+urls[2]);


var returned = 0;

//console.log("starting for loop...")
for (var i = 0; i < urls.length; i++) {
	
	//console.log("calling httpGet("+i.toString()+")...")
	httpGet(i);
}


function httpGet(index) {

	var url = urls[index];
	
	
	//console.log("httpGet("+index.toString()+")..started. url = "+url);

	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {

			if (err) console.error('There was an error!', err);
			
			
			var dataStr = data.toString();
			results[index] = dataStr;
			returned++;
			
			//console.log("dataStr.length = "+dataStr.length);
			//console.log("returned = "+returned.toString());
			
			if(returned == 3)
			{
				//console.log("Recorded 3 results, printing..")
				
				for(var resIdx in results)
				{
					console.log(results[resIdx]);
				}
				
				
			}
			else
			{
				//console.log("...not 3 results yet")
				
			}
		}
			)); //End of response.pipe()		
	}); //End of http.get()
}








