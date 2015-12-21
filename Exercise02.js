var total = 0;

//console.log(process.argv);

for(i = 2; i< process.argv.length; i++){

	//console.log("Adding "+process.argv[i]);

	total = total + Number(process.argv[i]);
}

console.log(total);