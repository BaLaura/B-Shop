angular.module('b-shop')
	.controller('addProductsCtrl', function($routeParams,$route,$location, $scope, $timeout,$rootScope, listservice){
		
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
			selectItem.editMode = false;
			console.log("createEmptyRow function",  selectItem.editMode)
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
			console.log("edit function", selectItem.editMode)


			selectItem.editMode = true;
			unselectItem();
			selectItem(index);
			$scope.visible = true;
			$scope.visibleSave = true;
			console.log(selectItem.editMode)

		};

		$scope.removeRow = function (index) {
			console.log("removeRow function")
			$scope.list.products.splice(index, 1);

			listservice.updateList($scope.list).success(function(data){
				$scope.list = data;
			});
			$scope.visible = false;
			$scope.visibleSave = false;
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


        $scope.back = function(){
			$location.path('/shoppinglists/');
		};

		$scope.cancel = function() {	
			if(selectItem.editMode){
				console.log("cancel function")
				unselectItem();
				$scope.visible = false;
				$scope.visibleSave = false;
			}
			else {
				$scope.visibleSave = false;
				$scope.visible = false;
				$scope.removeRow(0);
			}

				

		};
		
	});