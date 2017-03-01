'use strict';

class AppController {
	constructor($scope,$rootScope,$state,$http){
		$http({
			url:'http://183.131.78.204:7000/aj/user/login',
			method:'POST',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			data:$.param({
				user_name:"123",
				password:"123"
			})
		}).then(function(response){
			if(response.data.status){
				console.log(response.data.msg);
			}else{
				console.log(response.data.msg);
			}
		});

		if(typeof $rootScope.login_state == "undefined" || $rootScope.login_state==0){
			//$state.go('login');
			//return false;
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