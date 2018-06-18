(function(){
    angular.module("skillseval").controller("commandsController", commandsController);
    
    commandsController.$inject = ['ajaxService', 'socketService']

    function commandsController (ajaxService, socketService) {
        
        var vm = this;
        vm.commands = undefined;
        vm.sendCommand = sendCommand;
        init ();


        function init () {
            populateMenu();
        }


        function populateMenu () {
            ajaxService.doGet(angular._9.config.commandConfig)
            .then(function (res){
                vm.commands = res.data.commands;
            }, 
            function(err){
                console.log(err);
            });
        }


        function sendCommand (command) {
            socketService.send(command);
        }
    }
})();