var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var port = process.argv[2];



//console.log("port = "+port);

http.createServer(function (req, res) {
    
    //    /api/parsetime
    //    /api/parsetime?iso=2013-08-10T12:10:15.474Z
    //    return json
    
    //    /api/unixtime?iso=2013-08-10T12:10:15.474Z
   
    //
    
    //console.log("url = "+req.url);
    
    var parsedUrl = url.parse(req.url, true);

    if (parsedUrl.query.iso) {
        
        //console.log("iso = "+parsedUrl.query.iso);
        
        var parsedDate = new Date(parsedUrl.query.iso);
        
         var time ={};

        if (parsedUrl.pathname == "/api/parsetime") {
                
            time.hour = parsedDate.getHours();
            time.minute =parsedDate.getMinutes();
            time.second = parsedDate.getSeconds();
        }


        if (parsedUrl.pathname == "/api/unixtime") {
            
            time.unixtime = Math.floor(parsedDate);
        }
        
        
        
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(time));
    }else
    {
        res.end("iso query parameter not provided");
    }


}).listen(port);