var
	fs = require("fs"),
	path = require("path"),
	fileName = path.join(__dirname, "index_http.js");

console.log("1. starting to read file...");

try {
	$.ajax({
		success: function() {
			throw Error("some error")
		}
	})
} catch(exc) {
	// do something...
}

try {

fs.readFile(fileName, function(err, data) {

		if (err) {
			throw Error(err);
			//console.dir(err);
			//return;
		}

		console.log("2. completed reading file");
		console.log(data);

	});

} catch(err) {
	console.dir(err);
}

console.log("3. located after read file...");
