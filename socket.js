

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var call = null;
var receive = null;


io.on('connection', function(socket){
  console.log('#@# server connection');

  socket.on('disconnect', function(){
    console.log('#@# server disconnected');
  });

  socket.on('call', function(sdp){
  	 console.log('#@# server call', sdp);
  	 call = sdp;
  });

  socket.on('receive', function(sdp){
  	console.log('#@# server receive', sdp);
  	 receive = sdp;
  	 if(call && receive) {
  	 	var connectionData = {
  	 		call: call,
  	 		receive: receive
  	 	}

  	 	setTimeout(() => {
  	 		io.emit('conntect-webrtc', connectionData);
  	 		console.log("#@# server conntect-webrtc", connectionData);
  	 	} , 300);

  	 }
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});