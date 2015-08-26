angular.module('b-shop')
    .controller('loginCtrl', function($scope, $rootScope, $location, userservice,loginservice) {
    	$rootScope.logged = false;
    	if ((loginservice.getItem('email') == null)&&(loginservice.getItem('password')==null)){

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
    		userservice.login(loginservice.getItem('email'),loginservice.getItem('password')).success(function(data){
    			if (data != null){
    				$rootScope.loggedInUser=data;
    				$rootScope.logged = true;
    				window.alert('Welcome back!');
    				$location.path('/dash');
    			}
    		});
    	}
    });