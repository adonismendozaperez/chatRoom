const express = require('express'),
      app     = express(),
      server  = require('http').Server(app),
      io      = require('socket.io')(server);
 
app.use(express.static('client'));
 
app.get('/info', function(req, res){
    res.status(200).send('Info Page.');
});
 
let messages = [{
    id: 1,
    nickname: 'Bot-Master.',
    text: 'Welcome to the chat room.'
}];
 
io.on('connection', function(socket){
    console.log(`Client IP:${socket.handshake.address} has conect...`);
 
    /* SENT MESSAGE FOR DEFAULT TO THE FRONT-END */
    socket.emit('messages', messages);
 
    /* GET MESSAGE TO THE FRONT-END FOR THE SAVE IN THE SERVER */
    socket.on('add-message', function(data){
        messages.push(data);
 
        io.sockets.emit('messages', messages);
    });
 
});
 
/* CONFIGURING SERVER PORT */
server.listen(2122, function(){
    console.log('Server On.');
});