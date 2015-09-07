angular.module('b-shop')
    .controller('loginCtrl', function($scope, $rootScope, $location, userservice,loginservice) {
    	$rootScope.logged = false;
    	if (loginservice.getItem('user') == null){

	    	$scope.loginEvent = function () { 
	    		userservice.login($scope.eMail,$scope.password).success(function(data){
	    			console.log(data);
	    			loginservice.setItem('user', data);
	    			if (data != null){
	    				$rootScope.loggedInUser = data;
	    				$rootScope.logged = true;
	    				window.alert('Success');
	    				$location.path('/dash');
	    			} else {
	    				window.alert('Wrong email or passowrd! Try again!');
	    			}

	    		});

	    	}    	
    	} else {
    		if (loginservice.getItem('user')!= null){
    				$rootScope.loggedInUser=loginservice.getItem('user');
    				$rootScope.logged = true;
    				window.alert('Welcome back!');
    				$location.path('/dash');
    		};
    	}
    });