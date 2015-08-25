angular.module('b-shop')
	.controller('createListCtrl', function($scope){
		$scope.go = function ( path ) {
  			$location.path( path );
		};
	});