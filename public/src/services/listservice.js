angular.module("b-shop")
	.service("listService",function(httpservice,$rootScope){
		return {
			getLists: function(){
				return httpservice.handle("GET","/shoppinglists");
			},
			getList: function(id, data){
				return httpservice.handle("GET","/shoppinglists/" + id, data)
			},
			createList: function(id, data){
				return httpservice.handle("POST","/shoppinglists/", data)
			},
			updateList: function(data){
				return httpservice.handle("PUT","/shoppinglists/" + data._id, data)
			}
		};
	});