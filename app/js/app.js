var mobileAdminConsole = angular.module('mobileAdminConsole', [
		'ngRoute',
		'consoleControllers',
		'consoleServices'
]);

mobileAdminConsole.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/devices', {
				templateUrl: 'partials/device-list.html',
				controller: 'DeviceListCtrl'
			}).
			when('/devices/:id', {
				templateUrl: 'partials/device-details.html',
				controller: 'DeviceDetailCtrl'
			}).
			otherwise({
				redirectTo: '/devices'
			});
	}
]);