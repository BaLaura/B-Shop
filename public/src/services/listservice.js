angular.module("b-shop")
	.service("userservice",function(httpservice,$rootScope){
		return {
			getLists: function(){
				return httpservice.handle("GET","/users");
			},
			getList: function(id, data){
				return httpservice.handle("GET","/user/" + id, data)
			},
			updateList: function(data){
				return httpservice.handle("PUT","/user/" + data._id, data)
			}
		};
	});