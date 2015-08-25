angular.module("b-shop",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/",{
			templateUrl:"./src/views/loginView.tpl.html",
			controller: "loginCtrl"
		});
		$routeProvider.when("/shoppinglists", {
			templateUrl: "src/views/shoppinglist.tpl.html",
			controller: "shoppinglistCtrl"
		});
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	});