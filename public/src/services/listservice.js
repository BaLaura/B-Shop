angular.module("b-shop")
	.service("listservice",function(httpservice,$rootScope){
		return {
			getLists: function(){
				return httpservice.handle("GET","/lists");
			},
			getList: function(id){
				return httpservice.handle("GET","/list/" + id);
			},
			createList: function(data, userList){
				var newUserList =[]
				for ( var i=0; i<userList.length; i++ ) {
					newUserList.push(userList[i]._id);
				}
				data.users = newUserList;
				return httpservice.handle("POST","/list", data)
			},
			updateList: function(data){
				return httpservice.handle("PUT","/list/" + data._id, data)
			},
			deleteList: function(data){
				return httpservice.handle("DELETE","/list/" + data._id, data)
			}

		};
	});