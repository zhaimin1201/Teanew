'use strict';//使用严格模式
var dmpControllers = angular.module('ShopController', ['dmpServices']);
dmpControllers.controller('shopCtrl',shopCtrIn);
/*依赖注入*/
shopCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function shopCtrIn($scope,$state,$rootScope,service,$interval){
		$scope.visible = true;
		var loginuser=sessionStorage.loginuser;
		var loginpassword=sessionStorage.paswor;
		$scope.username=loginuser;
		//点击登录跳转到登录界面
		$scope.login=function(){
			$state.go("login");
		}
		
		//判断是否登录 
		if(sessionStorage.loginuser==""||(typeof(sessionStorage.loginuser)=="undefined")){
			 $scope.visible = true;
			 console.log("no")
	
		}else{
			$scope.visible = false;
			console.log("yes")
		}
		
		//查看购物车  点击购物车跳转到购物车页面
		var arr=[];
		$scope.shopcart=function(){
			$.ajax({
				type:"post",
				url:"http://114.67.224.249/tea/cart/getCart.do?&JSESSIONID="+sessionStorage.cookie,
				success:function(msg){
//					var data=msg.cart.allCartItem;

					sessionStorage.shopcar=JSON.stringify(msg.cart.allCartItem);
					console.log(msg.cart.allCartItem)
					$state.go("shopcart");
				}
			});
			
		}
		
		
		//请求最新商品接口
		$.ajax({
    	 	url:"http://114.67.224.249/tea/product/getNewProductList.do",
    	 	method:'post', 
    	 	async:false,//设置同步操作才可以赋值给全局
            success:function(data){            	
				$scope.items=data;
            }       
    	});
		
		//热门茶叶
		$.ajax({
    	 	url:"http://114.67.224.249/tea/product/getHotProductList.do",
    	 	method:'post', 
    	 	async:false,//设置同步操作才可以赋值给全局
            success:function(data){            	
				console.log(data);
				console.log(data[1].httppath);
				$scope.itemss=data;
            }       
    	});
    	
		//根据id请求每个产品的详情数据
		$scope.toPage=function(id){
			console.log(id);
			$state.go('shopList');
			$.ajax({
	    	 	url:"http://114.67.224.249/tea/product/getProductByTid.do?tid="+id,
	    	 	method:'post', 
	    	 	async:false,//设置同步操作才可以赋值给全局
	            success:function(data){            	
					console.log(data.httppath);
					$scope.listTitle=data.content;
					
					sessionStorage.listTitle=data.content;
					sessionStorage.imgpath=data.httppath;
					sessionStorage.price=data.price;
					sessionStorage.id=data.tid;
					
	            }       
	    	});
		}
}

