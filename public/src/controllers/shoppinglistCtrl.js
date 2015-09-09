angular.module('b-shop')
.controller('shoppinglistCtrl', function($scope, listservice,$timeout,$location) {
		listservice.getLists().success(function(data){
			$scope.allLists = data;
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
				$scope.date = new Date($scope.allLists[i].eventDate);
				$scope.milliseconds = $scope.date.getTime();
				$scope.mToday = $scope.today.getTime();
				if ($scope.mToday<$scope.milliseconds){
					$scope.nextEvents.push($scope.allLists[i]);
				} else {
					$scope.pastEvents.push($scope.allLists[i]);
				}
				console.log($scope.milliseconds);

			}
			$scope.editList = function (list){
				$location.path('/list/' + list._id);
			}
		});
});