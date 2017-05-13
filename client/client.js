var app = require('express')();
var express = require('express');
var http = require('http').Server(app);


app.use('/scripts', express.static(__dirname + '/node_modules/socket.io-client/dist/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
    