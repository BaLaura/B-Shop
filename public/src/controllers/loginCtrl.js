angular.module('b-shop')
    .controller('loginCtrl', function($scope, $rootScope, userservice) {
    	$scope.loginEvent = function () { 
    		console.log('as,das,d');
    		var success = false;
    		userservice.getUsers().success(function(data) {
				console.log(data);
				$scope.userList = data;
	    		
	    		for (i=0;i<$scope.userList.length;i++){
	    			if($scope.eMail == $scope.userList[i].email){
	    				if($scope.password == $scope.userList[i].password){
	    					success = true;
	    					$rootScope.currentUser = {
	    						"name": $scope.userList[i].name
	    					}
	    					if ($scope.userList[i].type == '1'){
	    						$rootScope.currentUser.isAdmin = true;
	    					} else {
	    						$rootScope.currentUser.isAdmin = false; 
	    					}
	    					console.log($rootScope.currentUser);
	    					break;
	    				}
	    			}
	    		}
	    		if (success){
	    			window.alert("Success!")
	    		} else {
	    			window.alert("Wrong email or password")
	    		}
			});
    	}

    	
    });