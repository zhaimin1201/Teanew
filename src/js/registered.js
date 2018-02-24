'use strict';//使用严格模式
var dmpControllers = angular.module('RegisteredController', ['dmpServices']);
dmpControllers.controller('registerCtrl',registerCtrIn);
/*依赖注入*/
registerCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function registerCtrIn($scope,$state,$rootScope,$interval,$http){
	console.log(234299);
	//点击登录跳转到登录页面
	$scope.gologin=function(){
		$state.go("login");
	}
	//点击首页跳转
	$scope.go_main=function(){
		$state.go("main");
	}
	//调用登录接口
    $scope.registered = function () {
    	 $.ajax({
    	 	url:"http://114.67.224.249/tea/user/regist.do",
    	 	method:'post',
    	 	data:{
                'username':$scope.username,
                'password':$scope.password,
                'name':$scope.name,
                'phone':$scope.phone
           },           
            success:function(data){
          			console.log(data.state);
          			if(data.state==200){
          				//注册成功跳转到登录页面
          				$state.go("login");
          			}else{
          				alert('注册失败');
          			}
            }
                    
    	})
	}	
}

