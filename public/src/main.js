angular.module("b-shop",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/",{
			templateUrl:"./src/views/loginView.tpl.html",
			controller: "loginCtrl"
		});
		$routeProvider.when("/list",{
			templateUrl:"./src/views/createList.tpl.html",
			controller: "createListCtrl"
		});
	});