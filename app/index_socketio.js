var
	express = require("express"),
	app = express(),
	path = require("path"),
	http = require("http").Server(app),
	io = require("socket.io")(http),
	port = 8080;

io.on("connection", function(socket) {

	socket.on("disconnect", function() {
		console.log("user disconnected");
	});

	socket.on("message", function(msg) {
		console.log("message: " + msg);
		io.emit("ack", "echo: " + msg);
	});

});

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "www", "index_socketio.html"));
});

http.listen(port, function() {
	console.log("web server started on port " + port);
});
