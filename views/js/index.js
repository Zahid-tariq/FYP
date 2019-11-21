$(function () {

  var $output = $('#message');
  var $output2 = $('#output');
  var $output3 = $('#feedback');
  //jquery
  var socket = io.connect();

  const {user} =  Qs.parse(location.search, { ignoreQueryPrefix: true });
  socket.emit('join',room);


  $('form').on('submit', function (event) {
    event.preventDefault();
    $output = $('#message').val();
    $('#message').val('');

    var data = {
      x: $output,
      y:user
    }
    //console.log(data);
    socket.emit('chat',data)
    });
//?
      //typing a message
      $output.bind("keypress", function() {   //keypress event
        socket.emit('typing',user)
      })

    socket.on('typing', (user) => {
        //console.log(user);
        $output3.html("<p><i>" + user + " is typing a message..." + "</i></p>")
      });

   socket.on('chat',function(data){
     //console.log(data.x);
     $output3.html('');
     $output2.append('<p class = "message">' + data.y + ":" + " " + data.x + '</p>');
     document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
    });
});