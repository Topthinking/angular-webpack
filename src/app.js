'use strict';

import angular from 'angular';
import myHeader from './view/common/header.html';
import myFooter from './view/common/footer.html';

let AppModule = 'app';

angular.module(AppModule, [
    require('angular-ui-router'),
    require('oclazyload'),
    require('angular-animate'),
    require('./view/_router').name
  ])
	.component('myHeader', {template: myHeader})
	.component('myFooter', {template: myFooter});
angular.bootstrap(document, [AppModule], { strictDi: true });