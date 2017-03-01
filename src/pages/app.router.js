'use strict';

function AppRouter($urlRouterProvider, $stateProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app',{
      abstract:true,
      url:'/app',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./app/app.html');
            deferred.resolve(template);
        });
        return deferred.promise;
      },
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
    .state('login',{
      url:'/login',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./login/login.html');
            deferred.resolve(template);
        });
        return deferred.promise;
      },
      controller:'LoginController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./login/login.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            });
          });
        }
      }
    })
    .state('app.home', {
      url: '/home',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./home/home.html');
            deferred.resolve(template);
        });
        return deferred.promise;
      },
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
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./home.edit/home.edit.html');
            deferred.resolve(template);
        });
        return deferred.promise;
      },
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