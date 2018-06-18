(function(){
    angular.module("skillseval").controller("homeController", homeController);
    
    homeController.$inject = ['ajaxService']

    function homeController (ajaxService) {
        
        var vm = this;
        vm.menuItems = undefined;

        init ();


        function init () {
            populateMenu();
        }


        function populateMenu () {
            ajaxService.doGet(angular._9.config.homeConfig)
            .then(function (res){
                vm.menuItems = res.data.menuItems;
            }, 
            function(err){
                console.log(err);
            });
        }
    }
})();