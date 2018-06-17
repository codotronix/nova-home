(function(){
    angular.module("skillseval", ['ngRoute'])

    .run(["$rootScope", function ($rootScope) {
        if(angular._9.hostType === 'app') {
            $rootScope.isMobileApp = true;
        }
    }]);
})();