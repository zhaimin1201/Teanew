'use strict';//使用严格模式
var dmpControllers = angular.module('ShopcartController', ['dmpServices']);
dmpControllers.controller('shopcartCtrl',shopcartCtrIn);
/*依赖注入*/
shopcartCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function shopcartCtrIn($scope,$state,$rootScope,service,$interval){
    $scope.username=sessionStorage.loginuser;
    $scope.items=JSON.parse(sessionStorage.shopcar)
    var a=JSON.parse(sessionStorage.shopcar)
    console.log(a)
    
     $scope.selectAll=false; 
     var number1=0;
     
    $scope.all= function (m) {  
        for(var i=0;i<a.length;i++){        	
        	if(m){
        		number1=number1+a[i].tea.price;
				$(".clabb").css("background","#f40");
        	}else{
        		number1=0;
        	}
        }  
        $scope.num=number1;
        
        
        
    };  
	$scope.money=function(){
		$.ajax({
				type:"post",
				url:"http://114.67.224.249/tea/order/generateOrder.do?&JSESSIONID="+sessionStorage.cookie,
				success:function(msg){
					console.log(msg)
					if(msg.state=="200"){
						console.log("yue")
						$(".buy_con").css("display","block");
						$(".buy_inpu").css("display","block")						
					}else{
						alert("购物车异常，请重新加入")
					}
				}
			});
	}
	$scope.buysh=function(){
		console.log(23421)
		console.log($scope.buyname)
		var buyname=$scope.buyname;
		var phon=$scope.phon;
		var address=$scope.address;
		window.location = "http://114.67.224.249/tea/order/pay.do?name="+buyname+"&phone="+phon+"&addr="+address+"&FrpId=CCB-NET-B2C&JSESSIONID="+sessionStorage.cookie		
//		$.ajax({
//				type:"post",
//				dataType:"json",
//				url:"http://114.67.224.249/tea/order/pay.do?name="+buyname+"&phone="+phon+"&addr="+address+"&FrpId=CCB-NET-B2C&JSESSIONID="+sessionStorage.cookie,
//				success:function(msg){
//					console.log(msg)
//				}
//			});
	}
   
}