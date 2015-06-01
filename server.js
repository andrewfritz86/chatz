var express = require('express');
var app = express();
var fs = require("fs")
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));


var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get("/", function(req,res){
  var html = fs.readFileSync("./index.html", "utf8")
  res.send(html)
})

var io = require("socket.io")(server)

io.on("connection", function(socket){
  console.log("SOMEONE CONNECTED!")
})