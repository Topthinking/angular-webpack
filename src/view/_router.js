'use strict';
let Host = "http://183.131.78.204:7021";

function ViewRouter($urlRouterProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');
}

export default angular
  .module('view.router', (()=>{
  	let router_list=[];
  	[
      'app',
      'login',
      'home',
      'home.edit',
    ].forEach((value)=>{
  		router_list.push(require('./'+value+'/_router').name);
  	});
  	return router_list;
  })())
  .value('url_param',{
  	"access_state":Host+"/access/state",
    "access_login":Host+"/access/login",
    "access_register":Host+"/access/register",
  })
  .config(ViewRouter);