var spawn = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function(cmd, args){
	var childProc = spawn(cmd, args);
	return duplex(childProc.stdin, childProc.stdout);	
};

//http://stackoverflow.com/questions/23387960/how-to-solve-nodeschools-duplexer-challange-without-the-duplexer-package