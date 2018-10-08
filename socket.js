

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var count = 0;
io.on('connection', function(socket){
  count = count + 1;
  console.log('a user connected', count);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});