var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');
var colors = require('colors');


var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  socket.on('message to server', function(data){
    console.log('mensagem', data.msg);
     socket.broadcast.emit('message to all', { msg: data.msg });
     socket.emit('message from server', { msg: data.msg });
     
  });
  console.log('cliente conectou');
});

server.listen(port, function() {
    console.log('Server listening at port %d'.yellow, port);
});