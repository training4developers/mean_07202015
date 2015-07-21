var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("<h1>Welcome to Node.js!</h1>");
	res.end();
}).listen(8080, function() {
	console.log("web server running on port 8080");
});
