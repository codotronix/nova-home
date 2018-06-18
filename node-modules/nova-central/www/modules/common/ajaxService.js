(function(){
	angular.module("skillseval").factory("ajaxService", ajaxService);
	
	ajaxService.$inject = ['$http', '$q', "secretService"];

	function ajaxService ($http, $q, secretService) {
		
		return {
			doGet: doGet
		}

		function doGet (url) {
			var deferred = $q.defer();

			$http.get(url).then(function(res) {
				deferred.resolve(res);
			},
			function(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}
	}
})();