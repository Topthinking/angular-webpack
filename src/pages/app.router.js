'use strict';

function AppRouter($urlRouterProvider, $stateProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app',{
      abstract:true,
      url:'/app',
      template:require('./app/app.html'),
      controller:'AppController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./app/app.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            });
          });
        }
      }
    })
    .state('app.home', {
      url: '/home',
      template: require('./home/home.html'),
      controller: 'HomeController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./home/home.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            });
          });
        }
      }
    })
    .state('app.home.edit', {
      url: '/edit',
      template: require('./home.edit/home.edit.html'),
      controller: 'HomeEditController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./home.edit/home.edit.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            });
          });
        }
      }
    });
}

export default angular
  .module('app.router', [])
  .config(AppRouter);