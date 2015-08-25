angular.module("b-shop",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/login",{
			templateUrl:"./src/views/loginView.tpl.html",
			controller: "loginCtrl"
		});
		$routeProvider.when("/list",{
			templateUrl:"./src/views/createList.tpl.html",
			controller: "createListCtrl"
		});
		$routeProvider.when("/shoppinglists", {
			templateUrl: "src/views/shoppinglist.tpl.html",
			controller: "shoppinglistCtrl"
		});
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	});