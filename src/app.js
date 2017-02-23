'use strict';

export default require('angular')
  .module('lazyApp', [
    require('angular-ui-router'),
    (() => { require('oclazyload'); return 'oc.lazyLoad' })(),
    require('./pages/home/home.routing').name,
  ]);
