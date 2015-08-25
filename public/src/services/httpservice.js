angular.module("b-shop")
	.service("httpservice",function($http){
		var base = "http://localhost:7000"
		return {
			handle: function(method, url, data, params){
				return $http({
					method: method,
					url: base + url,
					data: data,
					params: params
				})
			}
		};
	});