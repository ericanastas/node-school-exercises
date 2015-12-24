var fs = require('fs');
var through = require('through2');

function write(buffer, encoding, next)
{
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done)
{
	
	done();
}


var tr = through(write,end);

process.stdin.pipe(tr).pipe(process.stdout);