var http = require('http');
var fs = require('fs');
var through = require('through2');


http.createServer(function (req, res) {

	if (req.method === 'POST') {

		req.pipe(through(function (buff, _, next) {

			this.push(buff.toString().toUpperCase());

			next();
		})).pipe(res);
	}
	
}).listen(process.argv[2]);