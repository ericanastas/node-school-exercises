var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loudStr = tr.select('.loud').createStream();


loudStr.pipe(through(
	function(buff,enc,next)
	{
		this.push(buff.toString().toUpperCase());
		next();
	}
)).pipe(loudStr);

process.stdin.pipe(tr).pipe(process.stdout);