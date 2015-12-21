var net = require('net');

var port = process.argv[2];

//console.log("port = "+port);
//console.log(getDateTimeString());




var server = net.createServer(function(socket){
    
    var dateTimeStr = getDateTimeString();	
	socket.end(dateTimeStr);
    
}).listen(port);



function getDateTimeString()
{
    var now = new Date();
    
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    
    
    var dateTimeString = year.toString()+
    
    "-"+("00"+month).substr(-2,2)+
    "-"+("00"+day).substr(-2,2)+" "+
    ("00"+hour).substr(-2,2)+":"+
    ("00"+min).substr(-2,2);
    
    
    return dateTimeString;
}