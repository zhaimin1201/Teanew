'use strict';//使用严格模式
var dmpControllers = angular.module('LoginController', ['dmpServices']);
dmpControllers.controller('loginCtrl',loginCtrIn);
/*依赖注入*/
loginCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function loginCtrIn($scope,$state,$rootScope,service,$interval){
	//点击注册，跳转到注册页面
	$scope.registered=function(){
		$state.go("registered");	
	};
	//点击首页跳转
	$scope.go_main=function(){
		$state.go("main");
	};
	//调用登录接口
    $scope.login_sure = function () {
    	 $.ajax({
    	 	url:"http://114.67.224.249/tea/user/login.do",
    	 	method:'post',
    	 	data:{
                'username':$scope.username,
                'password':$scope.pwd,
           },           
            success:function(data){
            		console.log(data)
          			if(data.state==200){
          				$state.go("shop");
          				//将登录信息保存	
						sessionStorage.loginuser=$scope.username;
						sessionStorage.paswor=$scope.pwd;
						sessionStorage.cookie=data.JSESSIONID;
          			}else{
          				alert('登录失败');
          			}
            }
                    
    	})
	}
    
}

