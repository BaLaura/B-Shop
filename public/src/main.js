angular.module("b-shop",["ngRoute", "720kb.datepicker"])
	.config(function($routeProvider){
		$routeProvider.when("/",{
			templateUrl:"./src/views/loginView.tpl.html",
			controller: "loginCtrl"
		});
		$routeProvider.when("/dash",{
			templateUrl:"./src/views/dashboard.tpl.html",
			controller: "dashboardCtrl"
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
	}).run(function($rootScope, $location) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser == null) {
        if ( next.templateUrl === "src/views/loginView.tpl.html") {
        } else {
          $location.path("/");
        }
      }
    });
    $rootScope.redirectTo = function(location) {
			$location.path(location);
		}
  });