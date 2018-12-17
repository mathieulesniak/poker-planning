var app = require('express')();
var http = require('http').Server(app);

const io = require("socket.io")(http)
const port = process.env.PORT || 3000;

io.on('connection', function(socket){
  console.log("CONN DETECTED");
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});