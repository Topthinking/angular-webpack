'use strict';

class AppController {
	constructor($rootScope){
		$rootScope.name = "Top";
		this.name = $rootScope.name;
		console.log($rootScope.name);
	}
}

export default angular
	.module('app.controller',[])
	.controller('AppController',AppController);