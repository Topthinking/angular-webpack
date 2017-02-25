'use strict';

require("jquery");
require('bootstrap-loader');
let appModule = require('../app');
angular.bootstrap(document, [appModule.name], { strictDi: true });