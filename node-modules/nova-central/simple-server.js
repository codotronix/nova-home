var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var SerialPort = require('serialport');

var serialport = "/dev/ttyACM0";
var port = new SerialPort(serialport);

var app = express();
var httpServer = http.createServer(app);
var io = socketIO.listen(httpServer);

app.use(express.static((__dirname, 'www')));

httpServer.listen(process.env.PORT || 9090, function() {
    console.log('Server listening at ' + (process.env.PORT || 9090));
});

var client = undefined;

io.on('connection', function (socket) {
    console.log("socket.id = "+socket.id);

	socket.on('COMMAND', function (command) {
        console.log("command received = " + command);
        var c = comms[command.toLowerCase()];
        if (c !== undefined) {
          console.log("Will send to arduino " + c);
          sentToArduino(c);
        }
        //command = command.endsWith("$") ? command : command+"$";
        
    });

});

port.on('open', function() {
  console.log("serial port " + serialport + " opened succesfully...");
  setTimeout(function() {
  	sentToArduino('21$');
  }, 2000);
});
 
// open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('serial port opening error: ', err.message);
});

function sentToArduino (comnd) {
	port.write(comnd, function(err) {
	    if (err) {
	      return console.log('Error on write: ', err.message);
	    }
	    console.log('sending to serial ' + comnd);
  	});
}


var comms = {
  "light on": "21$",
  "light off": "22$",
  "blue on": "15$",
  "blue off": "16$",
  "blew off": "16$",
  "red on": "17$",
  "red off": "18$",
  "rid of": "18$",
  "green on": "13$",
  "green off": "14$",
  "yellow on": "19$",
  "yellow off": "20$"
}