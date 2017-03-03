'use strict';

class LoginController{
	constructor($state,$rootScope,$cookieStore,AccessService){
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.$cookieStore = $cookieStore;
		this.AccessService = AccessService;
		
		require('./login.less');

		if(typeof this.$cookieStore.get("user_info") == "undefined"){
			//未登录
		}else{
			//已登录
			this.$state.go('app.home');
		}
	}

	login(){
		this.AccessService.login({
			"user_name":this.user_name,
			"password":this.password
		}).then(function(response){
			if(response.data.status){
				this.$cookieStore.put("user_info",{
					user_name:this.user_name,
					uid:response.data.data.uid
				});
				this.$state.go('app.home');
			}else{
				alert(response.data.msg);
			}
		}.bind(this));
	}

	register(){
		this.AccessService.register({
			"user_name":this.user_name,
			"password":this.password
		}).then(function(response){
			if(response.data.status){
				alert(response.data.msg);
			}else{
				alert(response.data.msg);
			}
		}.bind(this));
	}
}

export default angular
	.module('login.controller',[
		require('../../service/access.service').name
		])
	.controller('LoginController',LoginController);