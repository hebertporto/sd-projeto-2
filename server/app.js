var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');
var colors = require('colors');


var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  console.log('cliente conectou');
});

server.listen(port, function() {
    console.log('Server listening at port %d'.yellow, port);
});