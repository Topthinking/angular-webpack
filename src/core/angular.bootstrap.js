'use strict';

require("jquery");
require("font-awesome-webpack");
require('bootstrap-loader');
let appModule = require('../app');
angular.bootstrap(document, [appModule.name], { strictDi: true });