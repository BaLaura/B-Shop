angular.module('b-shop')
	.controller('addProductsCtrl', function($scope, $timeout,$rootScope, listservice){
		
		$scope.selectedItem;

		$scope.init = function(){
			console.log($rootScope.currentId);
			listservice.getList($rootScope.currentId).success(function(data){
				$scope.list = data;
				console.log('Initializare: ', $scope.list);
			});
		};

		$scope.addProduct = function() {
			listservice.updateList($scope.list).success(function(data) {
				$scope.list = data;
				console.log('update: ', $scope.list);
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