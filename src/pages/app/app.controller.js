'use strict';

class AppController {
	constructor($scope,$rootScope,$state){
		if(typeof $rootScope.login_state == "undefined" || $rootScope.login_state==0){
			$state.go('login');
			return false;
		}else{
			this.name = $rootScope.user_name;
		}
		
		this.$scope = $scope;
		require('./app.less');

		this.$scope.$on('changeName',function(event,value){
			this.name = value;
			this.show_name = this.name=='' ? false : true;
		}.bind(this));

		this.show_name = this.name=='' ? false : true;
	}
}

export default angular
	.module('app.controller',[])
	.controller('AppController',AppController);