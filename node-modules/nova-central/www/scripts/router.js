(function(){
	angular.module("skillseval")
	.config(["$routeProvider", function ($routeProvider) {

		$routeProvider

		.when("/home", {
			templateUrl: "modules/home/homeTemplate.html",
			controller: "homeController",
			controllerAs: "vm"
		})

		.when("/commands", {
			templateUrl: "modules/commands/commands.html",
			controller: "commandsController",
			controllerAs: "vm"
		})

		.when("/", {
			redirectTo: "/home"
		})
		.otherwise({
			redirectTo: "/"
		});

	}]);
})();