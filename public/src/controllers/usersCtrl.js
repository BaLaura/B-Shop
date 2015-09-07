angular.module('b-shop')
	.controller('usersCtrl', function($timeout, $scope,$location,$rootScope,userservice,groupservice,loginservice){
		userservice.getUsers().success(function(data){
			$scope.userList = data;
			$timeout();
		});
		$scope.addUser = function(){
			$scope.visible = true;
		}
		$scope.cancelUser = function() {
			$scope.visible = false;
		}
		$scope.addGroup = function(){
			$scope.gVisible = true;
			$scope.userGroup = [];
		}
		$scope.cancelGroup = function(){
			$scope.gVisible = false;
		}
		$scope.userChecked = function (user){
			if ($scope.userGroup.indexOf(user._id) == -1){
				$scope.userGroup.push(user._id);
			} else {
				$scope.index = $scope.userGroup.indexOf(user._id);
				$scope.userGroup.splice($scope.index, 1);
			}
			console.log($scope.userGroup);
		}
		$scope.saveGroup = function(){
			$rootScope.loggedInUser=loginservice.getItem('user');
			console.log('logged user: ', $rootScope.loggedInUser);
			$rootScope.loggedInUser
			$scope.groupData = {
				name: $scope.groupName,
				users: $scope.userGroup,
				owner: $rootScope.loggedInUser._id
			}
			groupservice.createGroup($scope.groupData).success(function(data){
				$scope.groupData = data;
			});
		}

		$scope.saveUser = function(){
			$scope.userData = {
				name: $scope.name,
				password: $scope.password,
				email: $scope.email,
				type: $scope.checkbox

			}
			userservice.createUser($scope.userData).success(function(data){
				$scope.userData = data;
			});
			$location.path('/users');
		}
	});