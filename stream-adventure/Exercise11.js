var spawn = require('child_process').spawn;
var duplex = require('duplexer2');

module.exports = function(cmd, args){
	var childProc = spawn(cmd, args);
	return duplex(childProc.stdin, childProc.stdout);	
};