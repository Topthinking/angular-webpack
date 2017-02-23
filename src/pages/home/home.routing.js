'use strict';

function homeRouting($urlRouterProvider, $stateProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./views/home.html'),
      controller: 'HomeController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./controllers/home.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            });
          });
        }
      }
    })
    .state('home.edit', {
      url: '/edit',
      template: require('./views/home.edit.html'),
      controller: 'HomeEditController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./controllers/home.edit.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            });
          });
        }
      }
    });
}

export default angular
  .module('home.routing', [])
  .config(homeRouting);
