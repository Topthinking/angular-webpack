'use strict';

function ViewRouter($urlRouterProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');
}

export default angular
  .module('view.router', [
  		require('./app/_router.js').name,
      	require('./login/_router.js').name,
      	require('./home/_router.js').name,
      	require('./home.edit/_router.js').name
    ])
  .config(ViewRouter);