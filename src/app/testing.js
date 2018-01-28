// JavaScript source code
// for socket


var server = app.listen(8080);
var io = require('socket.io').listen(server);


	io.on('connection', function(socket){
	
		console.log("User connected");
	})

	server.listen('3000', function(){
	console.log("User connected");
	
	})