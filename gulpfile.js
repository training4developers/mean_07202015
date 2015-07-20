var gulp = require("gulp");

gulp.task("default", function() {
	require("./app/index.js");
});

gulp.task("websocket", function() {
	require("./app/index_websocket.js");
});

gulp.task("socketio", function() {
	require("./app/index_socketio.js");
});
