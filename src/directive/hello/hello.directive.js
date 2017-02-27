"use strict";

function hello(){
	return {
		scope:{
			helloData:"=",
		},
		restrict:"E",
		template:require('./hello.html'),
		replace:true,
		link:function(scope,element,attrs){	
	    	require('./main');
		}
	};
};

export default angular
	.module("hello.directive",[])
	.directive("hello",hello);
