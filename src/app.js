'use strict';

export default require('angular')
  .module('TopApp', [
    require('angular-ui-router'),
    (() => { require('oclazyload'); return 'oc.lazyLoad' })(),
    require('angular-animate'),
    require('./pages/app.router').name
  ]);
