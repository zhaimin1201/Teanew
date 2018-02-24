'use strict';//使用严格模式
var dmpControllers = angular.module('ShopListController', ['dmpServices']);
dmpControllers.controller('shoplistCtrl',shoplistCtrIn);
/*依赖注入*/
shoplistCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function shoplistCtrIn($scope,$state,$rootScope,service,$interval){
	$scope.listTitle=sessionStorage.listTitle;
	$scope.listImg=sessionStorage.imgpath;
	$scope.listPice=sessionStorage.price;
	$scope.visible = true;
	$scope.count=0;
	var id=sessionStorage.id;
	var loginuser=sessionStorage.loginuser;
	var loginpassword=sessionStorage.paswor;
	$scope.username=loginuser;
	var number1=$scope.count;
	//判断是否登录 
	if(sessionStorage.loginuser==""||(typeof(sessionStorage.loginuser)=="undefined")){
			 $scope.visible = true;
			 console.log("no")
	
		}else{
			$scope.visible = false;
			console.log("yes")
		}
		

	//点击登录跳转到登录界面
	$scope.login=function(){
			$state.go("login");
	}
	
	$scope.go_main=function(){
			$state.go("main");
		}
	//点击退出，跳转到登录页面
	$scope.outlogin=function(){
		sessionStorage.loginuser="";
		$state.go("login");
	}
	//购物数量
	$scope.f1=function(){	
		$scope.count++;
	}
	$scope.f2=function(){
		if($scope.count<=0){
			$scope.count=0
		}else{
			$scope.count--;
		}		
	}	
	//加入购物车
	$scope.shop=function(){
		if(typeof(sessionStorage.cookie)=="undefined"){
				alert("请先登录")
		}else{
			$.ajax({
				type:"post",
				url:"http://114.67.224.249/tea/cart/addCart.do?tid="+id+"&count="+number1+"&JSESSIONID="+sessionStorage.cookie,
				success:function(msg){
					if(msg.state==200){
						alert("添加成功");
					}else{
						alert("您尚未登录");
					}
				}
			});
		}
		
		
	}	
	//查看购物车  点击购物车跳转到购物车页面
	$scope.shopcart=function(){			
			$.ajax({
				type:"post",
				url:"http://114.67.224.249/tea/cart/getCart.do?&JSESSIONID="+sessionStorage.cookie,
				success:function(msg){
//					var data=msg.cart.allCartItem;
					console.log(msg)
					sessionStorage.shopcar=JSON.stringify(msg.cart.allCartItem);
					console.log(msg.cart.allCartItem)
					$state.go("shopcart");
				}
			});
			
		}
	
	$.ajax({
	    	url:"http://114.67.224.249/tea/product/getTeaById.do?tid="+id,
	    	method:'post', 
	    	async:false,//设置同步操作才可以赋值给全局
	        success:function(data){         
				$scope.Brandname=data.brandname;
				$scope.Data=data.date;
				$scope.Address=data.faddress;
				$scope.Foodditive=data.foodadditive;
				$scope.Storemethod=data.storemethod;
				$scope.Province=data.province;
				$scope.Shape=data.shape;
				$scope.Level=data.level;
				$scope.Pnumber=data.pnumber;
				$scope.Pluckingtime=data.pluckingtime;
				$scope.Netcontent=data.netcontent;
				$scope.Packagetype=data.packagetype;
	        }       
	});	
	
	//通过二维码查看详细信息
	$.ajax({
	    	url:"http://114.67.224.249/tea/product/getQRcodeImage.do?tid="+id,
	    	method:'post', 
	    	async:false,//设置同步操作才可以赋值给全局
	        success:function(data){         
	        }       
	});
	
	//点击去购买
	$.ajax({
	    	url:"http://114.67.224.249/tea/product/getQRcodeImage.do?tid="+id,
	    	method:'post', 
	    	async:false,//设置同步操作才可以赋值给全局
	        success:function(data){         
	        }       
	});
	
}