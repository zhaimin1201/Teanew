'use strict';//使用严格模式
var dmpControllers = angular.module('HeaderController', ['dmpServices']);
dmpControllers.controller('headCtrl',headCtrIn);
console.log(11111)
/*依赖注入*/
headCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function headCtrIn($scope,$state,$rootScope,service,$interval){
	
	console.log(2349249)
	
	
}

