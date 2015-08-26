angular.module("b-shop")
	.service("listservice",function(httpservice,$rootScope){
		return {
			getLists: function(){
				return httpservice.handle("GET","/list");
			},
			getList: function(id, data){
				return httpservice.handle("GET","/list/" + id, data)
			},
			createList: function(data){
				return httpservice.handle("POST","/list", data)
			},
			updateList: function(data){
				return httpservice.handle("PUT","/list/" + data._id, data)
			}
		};
	});