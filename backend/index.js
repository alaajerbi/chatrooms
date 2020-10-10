const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(http);
const utils = require('./utils');
const config = require('./config.js');

const TIMEOUT = config.duration * 60 * 1000;

var isIntervalRunning = false;
var remainingTimeInterval = null;

var rooms = [];

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

function remainingTimeHandler() {
  rooms.map(room => {
    if (room.clients.length == 2) {
      let elapsed = Date.now() - room.start;
      let remaining = Math.ceil((TIMEOUT - elapsed) / 1000);
      let roomId = room.id;
      io.sockets.in(roomId).emit('time left', remaining);
    }
  });
}

// function getTimeLeft(timeout) {
   
// }


app.get('/createChatRoom', function(req, res) {
  let roomId = utils.generateRoomId();
  let i = rooms.findIndex(room => {
    return room.id == roomId;
  });
  console.log(i);
  if (i === -1) {
    rooms.push({
    id: roomId,
    clients: [],
    timer: null,
    });
    console.log(roomId + ' was created!');
    res.json({
      success: true,
      roomId: roomId,
      message: 'Room was created successfully!'
    });
  }
  else{
    res.json({
      success: false,
      roomId: roomId,
      message: 'Room is already created!'
    })
  }
  
});


io.on('connection', function(socket){

  console.log('Somebody connected!');

  socket.on('create', function(roomId) {
    let i = rooms.findIndex(room => {
      return room.id == roomId;
    });
    console.log(i);
    if (i !== -1) {
      if (rooms[i].clients.length < 2) {
        socket.join(roomId);
        socket.roomId = roomId;
        rooms[i].clients.push(socket);
        console.log('A client was added to Room: ' + roomId);
        socket.emit('joined');
        console.log(rooms);

        if (rooms[i].clients.length === 2) {
          const roomTimer = setTimeout(() => {
            io.sockets.in(roomId).emit('over');
            clearInterval(remainingTimeInterval);
            isIntervalRunning = false;
          }, TIMEOUT);
          if (!isIntervalRunning) {
            remainingTimeHandler();
            remainingTimeInterval = setInterval(remainingTimeHandler, 1000);
            isIntervalRunning = true;
          }
          rooms[i].timer = roomTimer;
          rooms[i].start = Date.now();
          io.sockets.in(roomId).emit('ready');

          
        }
      }
      else {
        socket.emit('room full');
      }
      
    }
    else {
      socket.emit('room not found');
    }
    
  });

  socket.on('chat message', function(msg){
    let room = socket.roomId;
    console.log('A chat message was received');
    console.log('Room id: '+room);
    if (room !== undefined) {
      console.log('About to send it...');
      io.sockets.in(room).emit('message sent', {senderId: socket.id, body: msg});
    }
    else {
      console.log('Room not found!');
    }
  });
  socket.on('ready', function(){
    io.emit('ready', {username: socket.username, numberOfClients: clients.length});
  });
  socket.on('end', function(data) {
    socket.disconnect();
  });
  socket.on('disconnect', function() {
    let roomId = socket.roomId;
    let i = rooms.findIndex(room => {
      return room.id === roomId;
    });
    if (i !== -1) {
       let timerObj = rooms[i].timer;
       clearTimeout(timerObj);
       rooms.splice(i, 1);
       io.sockets.in(roomId).emit('room destroyed');

       if (rooms.length === 0) {
         clearInterval(remainingTimeInterval);
         isIntervalRunning = false;
       }
    }
  });
});

http.listen(config.PORT, function(){
  console.log('listening on *:4000');
});
