const express  = require("express")
const cors = require("cors")
const socket = require("socket.io")
const port = process.env.PORT || 3333;
const app = new express()

const clients = {};
const rooms = {};

app.use(cors())

const server = require('http').createServer(app);
const io     = require('socket.io').listen(server);

server.listen(port, function(){
  console.log('listening on *:' + port);
});


io.on('connection', function(socket){
  clients[socket.id] = { nick: "toto" + socket.id, room: "", socket};
  console.log(`${Object.keys(clients).length} clients connected`)

  socket.on('MESSAGE', function(msg){
    console.debug('RECEIVED MESSAGE on ' , socket.id, msg);
    handleMessages(msg, socket);
  });

  socket.on('disconnect', () => {
    console.log('DISCO');
    delete clients[socket.id];
  })
});

function handleMessages(message, socket) {
  switch (message.type) {
    case 'join':
      const roomName= message.payload;
      clients[socket.id].room = roomName;
      if (rooms[roomName] === undefined) {
        rooms[roomName] = {
          name: roomName,
          members: [],
          status: "idle",
        }
      }
      // FIXME: do not add if already member
      rooms[roomName].members.push(socket.id);
      ack(socket, message.type, roomName);
      broadcastMembersList(socket, roomName)
      break;
  }
}

function ack(socket, messageType, payload) {
  socket.emit('MESSAGE', {
    type: 'ACK',
    sourceType: messageType,
    sourcePayload: payload

  });
}

function broadcastMembersList(socket, roomName) {
  console.log(rooms[roomName]);
  const room = rooms[roomName];
  if (room.members.length > 1) {
    room.members.forEach((member) => {
      clients[member].socket.emit(
        'MESSAGE',
        {
          type: 'MEMBERS_LIST',
          payload: room.members,
        }
      )
    })
  }

}

function getMemberNameFromSocket(socketId) {
  return clients[socketId].name
}
function removeClientFromRoom(client) {

}