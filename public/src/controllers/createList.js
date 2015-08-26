angular.module('b-shop')
	.controller('createListCtrl', function($scope, listservice, userservice, $rootScope, $location){
		

		/* Initialize new list object */
		$scope.listItems = {
			title: "",
			event: "",
			eventDate: "",
			deadline: "",
			users: [],
			created: new Date()
		}

		/* Date Formats */
		var year = $scope.listItems.created.getFullYear();
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
		var month = n[$scope.listItems.created.getMonth()];
		var day = $scope.listItems.created.getDate();
		$scope.minDate = month + " " + day + ", " + year;

		/* Save list - values from form */
		$scope.saveList = function() {
			listservice.createList($scope.listItems).success(function(data) {
				$scope.listItems = data;
				$rootScope.redirectTo('/shoppinglists');
			});
		};

		/* Filter users search */
		$scope.findUser = "";
		$scope.showList = [];
		$scope.filterUsers = function() {
			if ( $scope.findUser.length > 2 ) {
				userservice.getUsersList($scope.findUser)
					.success(function(data) {
						$scope.showList = data;
						console.log($scope.showList);
					});
			}
		}
	});