'use strict';//使用严格模式
var dmpControllers = angular.module('BuyController', ['dmpServices']);
dmpControllers.controller('buyCtrl',buyCtrIn);
/*依赖注入*/
buyCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function buyCtrIn($scope,$state,$rootScope,service,$interval){
	
}