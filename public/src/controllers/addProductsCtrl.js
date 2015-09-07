angular.module('b-shop')
	.controller('addProductsCtrl', function($scope, $timeout, listservice){
		//$scope.addProduct = function (){
		//	console.log("add")
		//	$scope.list.push($scope.emptyRow);
		//	$scope.emptyRow = null;
		//};
		$scope.init = function(){
			listservice.getList("55ed5b06f5e315b00e7ae5f7").success(function(data){
				$scope.list = data;
			});
		};

		// $scope.list =[{
		// 	product: {
		// 		name: "",
		// 		quantity:"" ,
		// 		comment: {
		// 			text: ""
		// 		}
		// 	}
		// }];

		$scope.addProduct = function() {

			$scope.list.products.push($scope.emptyRow);

			listservice.updateList($scope.list).success(function(data) {
				$scope.list = data;
				$scope.emptyRow = null;
				$timeout();
			});

			//$scope("hide").hide();

		};


		$scope.emptyRow;
		$scope.cancelRow;

		$scope.createCancelButton = function(){
			if($scope.cancelRow){
				return;
			}

			$scope("#cancelButton").show();
		};

		$scope.createEmptyRow = function() {
			if ($scope.emptyRow) {
				console.log()
				return;
			}

			$scope.emptyRow = {
				name: "",
				quantity: "",
				comment: {
					text: ""
				}
			};

			// $scope.list.splice(0, 0, emptyRow);
		};

		$scope.removeRow = function (index) {

			$scope.list.products.splice(index, 1);

			listservice.updateList($scope.list).success(function(data){
				$scope.list = data;
			});
            
        };

		
	});