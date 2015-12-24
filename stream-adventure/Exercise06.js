var concat = require('concat-stream');

process.stdin.pipe(concat(
	function (text) {
		revText = text.toString().split('').reverse().join('');
		process.stdout.write(revText);
	}));