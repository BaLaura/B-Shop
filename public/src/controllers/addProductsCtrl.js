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

			$scope.visible = false;
		};


		$scope.emptyRow;
		//$scope.editMode = true;

		
			
				$scope.createEmptyRow = function() {
					//$scope.editMode = true;
					$scope.visible = true;

					if ($scope.emptyRow) {
						return;
					}

					$scope.emptyRow = {
						name: "",
						quantity: "",
						comment: {
							text: ""
						}
					};
				};

		
			

		$scope.cancel = function() {
			$scope.emptyRow = null;
			$scope.visible = false;

		};

	

		$scope.removeRow = function (index) {

			$scope.list.products.splice(index, 1);

			listservice.updateList($scope.list).success(function(data){
				$scope.list = data;
			});
            
        };

		
	});