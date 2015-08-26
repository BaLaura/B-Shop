angular.module('b-shop')
	.controller('dashboardCtrl', function($scope,$location,$rootScope){
		var visibility = function (){
			if ($rootScope.logged){
				return false;
			} else {
				return true;
			}

		}
		if ($rootScope.logged){
			console.log('Logged in!');
		} else {
			$location.path('/');
			window.alert('You must log in!')
		}
	});