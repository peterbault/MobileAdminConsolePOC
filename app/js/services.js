var consoleServices = angular.module('consoleServices', ['ngResource']);

consoleServices.factory('Device', ['$resource', 
	function($resource){
		return $resource('devices/:id.json', {}, 
			{ query: {method:'GET', params:{id:'devices'}, isArray:true }
		});
	}
]);