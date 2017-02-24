'use strict';

class AppController {
	constructor($scope){
		this.$scope = $scope;
		this.$scope.$on('changeName',function(event,value){
			this.name = value;
		}.bind(this));
	}
}

export default angular
	.module('app.controller',[])
	.controller('AppController',AppController);