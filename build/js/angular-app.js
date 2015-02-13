//Define angular app
var app = angular.module('app', ['templatescache', 'ngRoute', 'ngAnimate'])

//configure application routes, 
//note: this is using gulp-angular-template-cache so only template names are needed
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'home.html',
        controller: 'main-controller'
      })

      .when('/view1', {
        templateUrl: 'view1.html',
        controller: 'main-controller'
      })

      .when('/view2', {
        templateUrl: 'view2.html',
        controller: 'main-controller'
      })

      .otherwise({
      	redirectTo: '/#'
      });

    $locationProvider.html5Mode(false);
}])

//The main controller
app.controller('main-controller', function($scope){
	$scope.angularTest = "Angular is working correctly!";




});