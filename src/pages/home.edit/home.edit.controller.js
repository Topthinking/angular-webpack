'use strict';

class HomeEditController {
  constructor($http,$rootScope) {
    this.$http = $http;
    this.$rootScope = $rootScope;
  	require('./home.edit.less');
    
    this.name = this.$rootScope.name;
    this.text = '';
  }
  change_name(){
  	this.$http.post('/home/edit/',{
      "name":this.name
    }).then(function(data){
      this.text = this.name + data.data.msg;
      this.$rootScope.$broadcast('changeName',this.name);
    }.bind(this));
  }
}

export default angular
  .module('home.edit.controller', [])
  .controller('HomeEditController', HomeEditController);
