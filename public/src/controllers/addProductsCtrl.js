angular.module('b-shop')
	.controller('addProductsCtrl', function($scope, listservice){
		//$scope.addProduct = function (){
		//	console.log("add")
		//	$scope.list.push($scope.emptyRow);
		//	$scope.emptyRow = null;
		//};

		$scope.list =[{
			product: {
				name: "",
				quantity:"" ,
				comment: {
					text: ""
				}
			}
		}];

		$scope.addProduct = function() {
			listservice.createList($scope.list).success(function(data) {
			$scope.list.push(data);
			});
		};


		$scope.emptyRow;

		$scope.createEmptyRow = function() {
			if ($scope.emptyRow) {
				return;
			}

			$scope.emptyRow = {
				product: {
					name: "",
					quantity: "",
					comment: {
						text: ""
					}
				}
			};

			// $scope.list.splice(0, 0, emptyRow);
		};

		$scope.removeRow = function (id) {
            $scope.list.splice(id, 1);
        };

		
	});