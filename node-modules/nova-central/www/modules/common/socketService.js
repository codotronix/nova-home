(function(){
	angular.module("skillseval").factory("socketService", socketService);
	
	socketService.$inject = ['$http'];

	function socketService ($http) {
		
		var socket = io();

		return {
			send: send
		}

		function send (msg) {
			socket.emit('COMMAND', msg.trim());
		}
	}
})();