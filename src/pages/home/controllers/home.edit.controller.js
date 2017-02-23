'use strict';

class HomeEditController {
  constructor() {
  	require('./home.edit.less');
  	this.name = "thinking";
  }
}

export default angular
  .module('home.edit.controller', [])
  .controller('HomeEditController', HomeEditController);
