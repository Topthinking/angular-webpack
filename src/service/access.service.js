'use strict';

class AccessService{
	constructor($http,$rootScope,url_param){
		this.$http = $http;
		this.$rootScope = $rootScope;
		this.url_param = url_param;
	}

 	login(data){
 		return this.$http({
			url:this.url_param.access_login,
			method:'POST',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			data:$.param(data)
		});
  	}

  	register(data){
  		return this.$http({
			url:this.url_param.access_register,
			method:'POST',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			data:$.param(data)
		});
  	}
}

export default angular
	.module('access.service',[])
	.service('AccessService',AccessService);