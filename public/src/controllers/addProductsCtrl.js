angular.module('b-shop')
	.controller('addProductsCtrl', function($scope, $timeout, listservice){
		
		$scope.selectedItem;

		$scope.init = function(){
			listservice.getList("55ed5b06f5e315b00e7ae5f7").success(function(data){
				$scope.list = data;
			});
		};

		$scope.addProduct = function() {
			listservice.updateList($scope.list).success(function(data) {
				$scope.list = data;
				$timeout();
			});

			$scope.visible = false;
		};

		$scope.createEmptyRow = function() {
			unselectItem();
			$scope.visible = true;

			$scope.list.products.splice(0, 0, {
				name: "",
				quantity: "",
				comment: {
					text: ""
				}
			});
			selectItem(0);
		};

		$scope.edit = function (index){
			unselectItem();
			selectItem(index);
		};

		$scope.cancel = function() {
			unselectItem();
			$scope.visible = false;
		};

		$scope.removeRow = function (index) {
			$scope.list.products.splice(index, 1);

			listservice.updateList($scope.list).success(function(data){
				$scope.list = data;
			});
        };

        function selectItem(index) {
        	$scope.selectedItem = $scope.list.products[index];
        	$scope.selectedItem.editMode = true;
        }

        function unselectItem() {
        	if ($scope.selectedItem) {
        		$scope.selectedItem.editMode = false;
        		$scope.selectedItem = null;
        	}
        }
		
	});