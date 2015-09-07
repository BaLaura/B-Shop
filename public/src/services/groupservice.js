angular.module("b-shop")
	.service("groupservice",function(httpservice,$rootScope){
		return {
			createGroup: function(data){
				return httpservice.handle("POST","/group", data);
			}
		}

	});