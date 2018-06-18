var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var SerialPort = require('serialport');

//var serialport = "/dev/ttyACM0";
var serialport = "COM3";
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
        //var c = comms[command.toLowerCase()];
        if (command !== undefined) {
          console.log("Will send to arduino " + command);
          sentToArduino(command);
        }
        //command = command.endsWith("$") ? command : command+"$";
        
    });

});

port.on('open', function() {
  console.log("serial port " + serialport + " opened succesfully...");
  setTimeout(function() {
  	sentToArduino('26$');
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