angular.module("b-shop")
	.service("userservice",function(httpservice,$rootScope){
		return {
			getUsers: function(){
				return httpservice.handle("GET","/users");
			},
			getUser: function(id, data){
				return httpservice.handle("GET","/user/" + id, data)
			},
			getUsersList: function(name) {
				return httpservice.handle("POST", "/user/name", {
					name: name
				});
			},
			updateUser: function(data){
				return httpservice.handle("PUT","/user/" + data._id, data)
			}
		};
	});