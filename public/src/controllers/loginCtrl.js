angular.module('b-shop')
    .controller('loginCtrl', function($scope, $rootScope, $location, userservice) {
    	$scope.loginEvent = function () { 
    		userservice.login($scope.eMail,$scope.password).success(function(data){
    			console.log(data);
    			if (data != null){
    				window.alert('Success');
    				$location.path('/dash');
    			} else {
    				window.alert('Wrong email or passowrd! Try again!');
    			}

    		});

    	}    	
    });