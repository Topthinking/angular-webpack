'use strict';

class HomeController {
  constructor() {
  	require('./home.less');
  	this.name = "top";
  }
}

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
