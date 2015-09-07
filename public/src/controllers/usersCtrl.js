angular.module('b-shop')
	.controller('usersCtrl', function($timeout, $scope,$location,$rootScope,userservice){
		userservice.getUsers().success(function(data){
			$scope.userList = data;
			$timeout();
		});
	});