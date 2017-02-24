'use strict';

class HomeController {
  constructor($rootScope) {
  	require('./home.less');
  	this.name = $rootScope.name;
  }
}

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
