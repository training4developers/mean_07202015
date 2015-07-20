var gulp = require("gulp");

gulp.task("websocket", function() {
	require("./app/index_websocket.js");
});

gulp.task("socketio", function() {
	require("./app/index_socketio.js");
});
