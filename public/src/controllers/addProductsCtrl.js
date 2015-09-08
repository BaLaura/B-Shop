angular.module('b-shop')
	.controller('addProductsCtrl', function($scope, $timeout, listservice){
		
		$scope.init = function(){
			listservice.getList("55ed5b06f5e315b00e7ae5f7").success(function(data){
				$scope.list = data;
			});
		};



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
		$scope.editMode = false;

		
		$scope.createEmptyRow = function() {
			$scope.editMode = true;
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

		
		$scope.edit = function (index){
			console.log($scope.list.products[index].editMode)
			$scope.list.products[index].editMode = true;
			
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