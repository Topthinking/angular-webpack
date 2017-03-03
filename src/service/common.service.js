'use strict';

class CommonService{
	constructor($http,$rootScope,url_param){
		this.$http = $http;
		this.url_param = url_param;
	}
}

export default angular
	.module('common.service',[])
	.service('CommonService',CommonService);