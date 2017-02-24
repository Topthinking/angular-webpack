'use strict';

class HomeEditController {
  constructor($http) {
    this.$http = $http;
  	require('./home.edit.less');

    var a = $http({
      method:"GET",
      url:'/home/edit'
    }).success(function(data){
      console.log(data);
    });

      console.log(a.$$state);
      
  }
  change_name(){
  	this.$http.post('/home/edit',{
      "name":this.name
    });
  }
}

export default angular
  .module('home.edit.controller', [])
  .controller('HomeEditController', HomeEditController);
