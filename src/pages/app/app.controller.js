'use strict';

class AppController {
	constructor($scope){
		this.$scope = $scope;
		require('./app.less');

		this.name = '';

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