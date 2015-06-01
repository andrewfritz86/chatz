console.log("io linked!")
var socket = io();
$("#hellobutton").on("click", function(e){
  console.log("clicked!")
  var data = $("#namefield").val()
  socket.emit("newName", data)
})

// socket.on("anyatalked", function(data){
//   console.log("anya talked and said " + data)
// })

socket.on("friendName", function(data){
  //append the name to dom
  $("#container").append(data + "</br>")
})