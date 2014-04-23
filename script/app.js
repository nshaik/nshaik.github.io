var phonecatApp = angular.module('app', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'template/home.html',
			controller: 'home'
		}).
		otherwise({
			redirectTo: '/'
		});
}])

.controller('home',function($scope){
	$scope.title = "Home Page";
});