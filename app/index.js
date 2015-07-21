var
	express = require("express"),
	app = express(),
	path = require("path"),
	fs = require("fs"),
	zlib = require("zlib"),
	http = require("http").Server(app),
	io = require("socket.io")(http),
	BufferStream = require("./buffer-stream"),
	port = 8080;

io.on("connection", function(socket) {

	socket.on("disconnect", function() {
		console.log("user disconnected");
	});

	socket.on("upload", function(fileInfo) {

		var
			filePath = path.join(__dirname, "uploads", fileInfo.fileName),
			gzip = zlib.createGzip(),
			bufferStream = new BufferStream(fileInfo.fileData),
			output = fs.createWriteStream(filePath + ".gz");

		output.on("finish", function() {
				socket.emit("upload result", "upload was successful");
		});

		bufferStream.pipe(gzip).pipe(output);

	});

});

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "www", "index.html"));
});

http.listen(port, function() {
	console.log("web server started on port " + port);
});
