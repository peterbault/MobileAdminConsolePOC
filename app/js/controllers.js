var consoleControllers = angular.module('consoleControllers', []);

consoleControllers.controller('DeviceListCtrl', ['$scope', 'Device', function($scope, Device){
	$scope.devices = Device.query();
}]);

consoleControllers.controller('DeviceDetailCtrl', ['$scope', '$routeParams', 'Device',
	function($scope, $routeParams, Device){
		$scope.device = Device.get({id: $routeParams.id}, function(device){

		});
	}
]);