const express = require('express'),
      app     = express(),
      server  = require("http").Server(app),
      io      = require("socket.io")(server);


app.get('/home',function (req,resp){
    resp.status(200).send('Test');
});




server.listen(2122,function (){
    console.log('Server On!');
});



