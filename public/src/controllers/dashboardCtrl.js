angular.module('b-shop')
	.controller('dashboardCtrl', function($scope,$location,$rootScope,loginservice){
		var visibility = function (){
			if ($rootScope.logged){
				return false;
			} else {
				return true;
			}
		}
		$scope.logout = function(){
			console.log("log out")
			window.alert('Logged out')
			loginservice.removeItem('user');
			$rootScope.loggedInUser = null;
	    	$location.path('/')
		}
		if ($rootScope.logged){
			console.log('Logged in!');
		}
	});