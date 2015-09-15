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
	    				window.alert('Wrong email or password! Try again!');
	    			}

	    		});

	    	}    	
    	} else {
    		if (loginservice.getItem('user')!= null){
    			console.log("asdgasjd", loginservice.getItem('user'));
				$rootScope.loggedInUser=loginservice.getItem('user');
				$rootScope.logged = true;
				$location.path('/dash');
    		};
    	}
    });

   /*.directive('ngEnter', function(){
    	return function(scope, element, attrs) {
    		element.bind("keydown keypress", function(event){
    			if(event.which === 13){
    				scope.$apply(function (){
    					scope.$eval(attrs.ngEnter);
    				});
    			}
    		});

    	};
    });*/