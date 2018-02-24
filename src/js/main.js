'use strict';//使用严格模式
var dmpControllers = angular.module('MainController', ['dmpServices']);
dmpControllers.controller('mainCtrl',mainCtrIn);
/*依赖注入*/
mainCtrIn.$inject=["$scope","$state","$rootScope","service","$interval","$http"];
function mainCtrIn($scope,$state,$rootScope,$interval,$http){	
	function main_a(){
		//控制养生最后一项的margin值为0
		$(document).ready(function() {
		    $(".ysbnt ul li:last").css("margin-right","0px");
		});		
		$(document).ready(function() {
		    $($(".p-list ul li")[0]).css("margin-left","0px");
			$($(".p-list ul li")[2]).css("margin-right","0px");
			$($(".p-list ul li")[3]).css("margin-left","0px")
			$($(".p-list ul li")[5]).css("margin-right","0px")
		});		
		$(document).ready(function() {
		    $($(".zzjd ul li")[2]).css("margin-right","0px");
			$($(".zzjd ul li")[5]).css("margin-right","0px");
		});
		
		
		
		$(document).ready(function() {
		    var $n_li=$(".f_page ul li a");
			$n_li.click(function(){
				$(this).addClass("f_li_bg").parent().siblings().find("a").removeClass("f_li_bg");
			})
		});
	}
	main_a();

	//点击商铺跳转到其页面
	$scope.test=function(){
		$state.go("shop");	
	}
	//点击关于我们跳转到相应页面
	$scope.call=function(){
		$state.go("about");	
	}
	
	
	//点击追溯调用追溯接口
	$scope.traceback=function(){
		$state.go("member_goTrace");
		var id;
		if($scope.psnumber=="Q/LMC0001S"){
			id=1;
			sessionStorage.setItem("id","1");
			
		}else{
			alert("请输入正确的追溯码")
		}
		console.log(id)
		 $.ajax({
    	 	url:"http://114.67.224.249/tea/product/getTeaById.do?tid="+id,
    	 	method:'post',          
            success:function(data){
            	console.log(data);
				$state.go("member_goTrace");
            }
                    
    	})			
	}
	
	//点击新闻动态，跳转到新闻页面
	$scope.newmessage=function(){
		$state.go("news");
	}
	
}

