angular.module('b-shop')
	.controller('addProductsCtrl', function($location, $scope, $timeout,$rootScope, listservice){
		
		$scope.selectedItem;

		$scope.init = function(){
			console.log($rootScope.currentId);
			listservice.getList($rootScope.currentId).success(function(data){
				$scope.list = data;
				console.log('Initializare: ', $scope.list);
			});
			$scope.visibleSave = false;
		};

		$scope.addProduct = function() {
			listservice.updateList($scope.list).success(function(data) {
				$scope.list = data;
				console.log('update: ', $scope.list);
				$timeout();
			});

			$scope.visible = false;
			$scope.visibleSave = false;

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
			$scope.visibleSave = true;
		};

		$scope.edit = function (index){
			unselectItem();
			selectItem(index);
			$scope.visible = true;
			$scope.visibleSave = true;

		};

		$scope.cancel = function() {
			unselectItem();
			$scope.visible = false;
			$scope.visibleSave = false;
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

        $scope.deleteList = function(){
        	listservice.deleteList($scope.list).success(function(data){
        		$scope.list = data;
        	});
        	$location.path('/shoppinglists/');
        	window.alert('I hope you are sure!');
        };

        $scope.back = function(){
			$location.path('/shoppinglists/');
		};
		
	});