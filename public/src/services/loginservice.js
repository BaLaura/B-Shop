angular.module('b-shop')
	.service('loginservice',function(){
		return{
			getItem: function(key){
				return localStorage.getItem(key);
			},
			setItem: function(key, value){
				localStorage.setItem(key, value);
			},
			removeItem: function(key){
				localStorage.removeItem(key);
			}
		}
	})