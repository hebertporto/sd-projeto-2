var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');
var colors = require('colors');


var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  socket.on('message to server', function(data){
     var date = new Date();
     var msgFormatada = data.login + ' ' + date.getHours() + 'h' + date.getMinutes()+ ': ' + data.msg;
     socket.broadcast.emit('message to all', { msg: msgFormatada });
     msgFormatada = 'Você ' + date.getHours() + 'h' + date.getMinutes()+ ': ' + data.msg;
     socket.emit('message from server', { msg: msgFormatada});
  });
});

server.listen(port, function() {
    console.log('Server listening at port %d'.yellow, port);
});