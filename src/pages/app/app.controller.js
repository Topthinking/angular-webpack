'use strict';

class AppController {
	constructor(){
		this.name = "123";
	}
}

export default angular
	.module('app.controller',[])
	.controller('AppController',AppController);