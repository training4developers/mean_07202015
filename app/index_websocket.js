var
	express = require("express"),
	app = express(),
	path = require("path"),
	http = require("http").Server(app),
	webSocket = require("websocket.io"),
	socketServer = webSocket.attach(http),
	port = 8080;

socketServer.on("connection", function(socket) {

	socket.on("disconnect", function() {
		console.log("user disconnected");
	});

	socket.on("message", function(msg) {
		console.log("message: " + msg);
		socket.send("echo: " + msg);
	});

});

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "www", "index_websocket.html"));
});

http.listen(port, function() {
	console.log("web server started on port " + port);
});
