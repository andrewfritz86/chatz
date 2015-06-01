console.log("io linked!")
var socket = io();
$("#hellobutton").on("click", function(e){
  console.log("clicked!")
  socket.emit("anya", {name: "anya", short: true})
})

socket.on("anyatalked", function(data){
  console.log("anya talked and said " + data)
})