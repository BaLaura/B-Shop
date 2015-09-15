angular.module("b-shop")
	.service("groupservice",function(httpservice,$rootScope, loginservice){
		return {
			createGroup: function(data){
				return httpservice.handle("POST","/group", data);
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