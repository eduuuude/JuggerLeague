
module.exports = function(server){

  //var server = require('http').Server(app);
  var io = require('socket.io').listen(server);

  var users = [];
  var tmp=0;

io.on('connection', function(socket){
  console.log('Nueva conexión establecida.');

  socket.on('newConnection',function(data){
    if((data.isEmitter)==true){
      tmp+=1;                                                                                     //Esto es una solucion temporal para almacenar emisores con nombres distintos
      console.log('Emisor con nombre ' + data.name+tmp.toString() + ' conectado');
      socket.emit('userName',data.name+tmp.toString());
      users.push(data.name+tmp.toString());
    }
    console.log("Número de usuarios emitiendo: "+users.length);
    io.emit('updateUsers',users);
  });

  socket.on('sendStream',function(data){
    socket.broadcast.emit('sendStream',data);
  });

  socket.on('closeConnection', function(name){
    users.splice(users.indexOf(name),1);
    console.log('Emisor con nombre ' + name + ' desconectado');
    console.log("Número de usuarios emitiendo: "+users.length);
    io.emit('stopStreaming',undefined);
    io.emit('updateUsers',users);
  });

});

}
