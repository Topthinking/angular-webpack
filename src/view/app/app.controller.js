'use strict';

class AppController {
	constructor($scope,$rootScope,$state,$http,$cookieStore){
		this.$scope = $scope;
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.$cookieStore = $cookieStore;
		
		require('./app.less');

		if(typeof this.$cookieStore.get("user_info") == "undefined"){
			//未登录
			this.$state.go('app.home');
		}

		this.show_name = true;
		this.name = this.$cookieStore.get("user_info").user_name;

		this.$scope.$on('changeName',function(event,value){
			this.name = value;
			this.show_name = this.name=='' ? false : true;
		}.bind(this));
	}

	logout(){
		this.$cookieStore.remove("user_info");
		this.$state.go("login");
	}
}

export default angular
	.module('app.controller',[])
	.controller('AppController',AppController);