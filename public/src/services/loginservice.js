angular.module('b-shop')
	.service('loginservice',function(){
		return{
			getItem: function(key){
				return JSON.parse(localStorage.getItem(key));
			},
			setItem: function(key, value){
				localStorage.setItem(key, JSON.stringify(value));
			},
			removeItem: function(key){
				localStorage.removeItem(key);
			}
		}
	})