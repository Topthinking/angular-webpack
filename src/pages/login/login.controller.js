'use strict';

class LoginController{
	constructor($state,$rootScope){
		if(typeof $rootScope.login_state != "undefined" && $rootScope.login_state==1){
			$state.go('app.home');
			return false;
		}
		this.$rootScope = $rootScope;
		this.$state = $state;
		require('./login.less');
	}
	login(){
		this.$rootScope.login_state = 1;
		this.$rootScope.user_name = this.name;
		this.$state.go('app.home');
	}
}

export default angular
	.module('login.controller',[])
	.controller('LoginController',LoginController);