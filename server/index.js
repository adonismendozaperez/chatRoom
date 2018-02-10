const express = require('express'),
      app     = express(),
      server  = require("http").Server(app),
      io      = require("socket.io")(server);


/* GET PAGE FOR DEFAULT */
app.use(express.static('client'));

app.get('/home',function (req,resp){
    resp.status(200).send('Test');
});

/* CONNET TO SOCKET */
io.on('connection', function (socket){
    console.log(`client ip: ${socket.handshake.address} is connecting...`);
});

server.listen(2122,function (){
    console.log('Server On!');
});