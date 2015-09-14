angular.module('b-shop')
.controller('shoppinglistCtrl', function($rootScope, $scope, listservice,$timeout,$location) {
		listservice.getLists().success(function(data){
			$scope.allLists = data;
			$scope.visibleLists = [];
			$scope.nextEvents = [];
			$scope.pastEvents = [];
			$scope.today = new Date();
			var n = new Array();
				n[0] = "January";
				n[1] = "February";
				n[2] = "March";
				n[3] = "April";
				n[4] = "May";
				n[5] = "June";
				n[6] = "July";
				n[7] = "August";
				n[8] = "September";
				n[9] = "October";
				n[10] = "November";
				n[11] = "December";
			for(i=0;i<$scope.allLists.length;i++){
				$scope.userAllowed = false;
				for(j=0;j<$scope.allLists[i].users.length;j++){
					if ($scope.allLists[i].users[j].name==$rootScope.loggedInUser.name){
						$scope.userAllowed = true;
					}
				}
				console.log('index:', $scope.indexUser,'Lista curenta:', $scope.allLists[i],'currentUser:',$rootScope.loggedInUser);
				if($scope.userAllowed||($scope.allLists[i].owner == $rootScope.loggedInUser._id)||($rootScope.loggedInUser.type == 1)){
					$scope.date = new Date($scope.allLists[i].eventDate);
					$scope.milliseconds = $scope.date.getTime();
					$scope.mToday = $scope.today.getTime();
					if ($scope.mToday<$scope.milliseconds){
						$scope.nextEvents.push($scope.allLists[i]);
					} else {
						$scope.pastEvents.push($scope.allLists[i]);
					}
				}
			}
			$scope.editList = function (list){
				$rootScope.currentId = list._id;
				$location.path('/list/' + list._id);
			}
		});
});