console.log(angular);

angular.module("b-shop", [
	"ngRoute"
]).config(function($routeProvider) {
		$routeProvider.when("/shoppinglists", {
			templateUrl: "src/views/shoppinglist.tpl.html",
			controller: "shoppinglistCtrl"
		});
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	});