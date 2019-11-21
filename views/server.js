var express = require('express');
//make server through express
var app = express();
var server = require('http').createServer(app);

//database connection
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
//const connect = require("./db");
//const image = require("./models/image");

server.listen(process.env.PORT || 4000);
console.log('<<<Server is Running>>>');

 app.use(express.static('111'));

 //route
 app.get('/room/1234',function(req,res)
{
   res.sendFile(__dirname + '/spaindex.html');
});

var socket = require('socket.io');
   var io = socket(server);

  //an array to store connected_users
const user1 = {};
//?
const save = {};
  io.sockets.on('connection',function(socket){

    // socket.on('user',function(user){
     //  user1[socket.id] = user;
     console.log("client connected");
      //console.log('Client Connected its ID:', socket.id + " " + 'And its Name is' + " " + user);
       // });

     //socket.on('join', function(room) {

     //socket.join(room);
      // console.log('User joins the room' + room);

    // socket.on('user',function(user){
     //  io.sockets.to(room).emit('user', user);  //its for room
//      });

    //for typing
  //   socket.on('typing', (user) => {
    //    socket.broadcast.to(room).emit('typing', user)
   // });

     socket.on('upload',function(data){

     /* MongoClient.connect(url, function(err, db) {
        console.log("connection to the mongoDB is made");
        if (err) throw err;
        var dbo = db.db("image");

      var obj = { upload:data};
      dbo.collection("images").insertOne(obj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });

       connect.then(db =>{
       console.log("connected correctly to the database server");

       let  upload1  =  new image({ upload: data.x});
       upload1.save();

         dbo.collection("images").findOne({}, function(err, result) {
          if (err) throw err;
         console.log(result.upload.toString("base64"));
         data = result.upload.toString("base64");
         db.close();
*/
         socket.broadcast.emit('upload', data);
     //});
});

       socket.on('rotate-left',function(data){
        socket.broadcast.to(room).emit('rotate-left', data);
       });

       socket.on('rotate-right',function(data){
        socket.broadcast.to(room).emit('rotate-right', data);
        });

       socket.on('chat',function(data){
        io.sockets.to(room).emit('chat', data);
        });

      socket.on('bright-inc',function(data){
       socket.broadcast.to(room).emit('bright-inc', data);
       });

      socket.on('bright-dec',function(data){
       socket.broadcast.to(room).emit('bright-dec', data);
       });

      socket.on('contrast-inc',function(data){
       socket.broadcast.to(room).emit('contrast-inc', data);
       });

      socket.on('contrast-dec',function(data){
        socket.broadcast.to(room).emit('contrast-dec', data);
       });

      socket.on('saturation-inc',function(data){
        socket.broadcast.to(room).emit('saturation-inc', data);
       });

      socket.on('saturation-dec',function(data){
        socket.broadcast.to(room).emit('saturation-dec', data);
       });

      socket.on('stack-inc',function(data){
        socket.broadcast.to(room).emit('stack-inc', data);
       });

      socket.on('vibrance-inc',function(data){
         socket.broadcast.to(room).emit('vibrance-inc', data);
        });

      socket.on('vibrance-dec',function(data){
         socket.broadcast.to(room).emit('vibrance-dec', data);
        });

      socket.on('exposure-inc',function(data){
         socket.broadcast.to(room).emit('exposure-inc', data);
        });

      socket.on('exposure-dec',function(data){
         socket.broadcast.to(room).emit('exposure-dec', data);
        });

      socket.on('noise-inc',function(data){
        socket.broadcast.to(room).emit('noise-inc', data);
       });

        //noise problem
      /*socket.on('noise-dec',function(data){
        socket.broadcast.emit('noise-dec', data);
        });*/

      /*  socket.on('sharpen-inc',function(data){
        socket.broadcast.to(room).emit('sharpen-inc', data);
        });
 
      socket.on('sepia',function(data){
        socket.broadcast.to(room).emit('sepia',data);
        });
 
      socket.on('hue-inc',function(data){
        socket.broadcast.to(room).emit('hue-inc', data);
        });
        
      socket.on('gamma-inc',function(data){
        socket.broadcast.to(room).emit('gamma-inc', data);
        });

      socket.on('blur-inc',function(data){
        socket.broadcast.to(room).emit('blur-inc', data);
        });

      socket.on('clip-inc',function(data){
        socket.broadcast.to(room).emit('clip-inc', data);
        });
 
      socket.on('vintage',function(data){
        socket.broadcast.to(room).emit('vintage',data);
        });

      socket.on('clarity',function(data){
        socket.broadcast.to(room).emit('clarity',data);
        });

      socket.on('lomo',function(data){
        socket.broadcast.to(room).emit('lomo',data);
        });

      socket.on('sincity-btn',function(data){
        socket.broadcast.to(room).emit('sincity-btn',data);
        });

      socket.on('crossprocess',function(data){
        socket.broadcast.to(room).emit('crossprocess',data);
        });

      socket.on('nostalgia',function(data){
        socket.broadcast.to(room).emit('nostalgia',data);
        });

      socket.on('pinhole',function(data){
        socket.broadcast.to(room).emit('pinhole',data);
        });

       socket.on('hermajesty',function(data){
        socket.broadcast.to(room).emit('hermajesty',data);
        });

       socket.on('sunrise',function(data){
         socket.broadcast.to(room).emit('sunrise',data);
        });

       socket.on('orange',function(data){
          socket.broadcast.to(room).emit('orange',data);
        });

       socket.on('love',function(data){
          socket.broadcast.to(room).emit('love',data);
        });

        socket.on('grungy',function(data){
          socket.broadcast.to(room).emit('grungy',data);
        });

       socket.on('jarque',function(data){
          socket.broadcast.to(room).emit('jarque',data);
        });

        socket.on('old',function(data){
          socket.broadcast.to(room).emit('old',data);
        });

       socket.on('glow',function(data){
          socket.broadcast.to(room).emit('glow',data);
        });

        socket.on('hazy',function(data){
          socket.broadcast.to(room).emit('hazy',data);
        });

       socket.on('heming',function(data){
          socket.broadcast.to(room).emit('heming',data);
        });

        socket.on('concentrate',function(data){
          socket.broadcast.to(room).emit('concentrate',data);
        });

        socket.on('grey',function(data){
          socket.broadcast.to(room).emit('grey',data);
        });

        socket.on('invert',function(data){
          socket.broadcast.to(room).emit('invert',data);
        });

      socket.on('disconnect', function(){
        //  console.log('bye'+ " " + user1[socket.id] );
          var user_name = user1[socket.id];
         socket.broadcast.to(room).emit('bye', user_name);
         delete user1[socket.id];
      });*/

   });
