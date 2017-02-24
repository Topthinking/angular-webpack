'use strict';

class HomeController {
  constructor($scope) {
  	require('./home.less');
  	this.$scope = $scope;
	this.$scope.$on('changeName',function(event,value){
		this.name = value;
	}.bind(this));
  }
}

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
