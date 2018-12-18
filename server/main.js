const express  = require("express")
const cors = require("cors")
const socket = require("socket.io")
const port = process.env.PORT || 3333;
const app = new express()

const clients = {};

app.use(cors())

const server = require('http').createServer(app);
const io     = require('socket.io').listen(server);

server.listen(port, function(){
  console.log('listening on *:' + port);
});


io.on('connection', function(socket){
  clients[socket.id] = { socket, nick: ""};
  console.log(`${Object.keys(clients).length} clients connected`)

  socket.on('chat', function(msg){
    console.log('RECEIVED chatmessage on ' , socket.id);
    io.emit('chat message', msg);
  });

  socket.on('SET_NICK', function(msg) {

  });

  socket.on('disconnect', () => {
    console.log('DISCO');
    delete clients[socket.id];
  })
});


