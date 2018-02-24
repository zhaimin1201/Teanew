'use strict'; //使用严格模式
var dmpControllers = angular.module('AboutController', ['dmpServices']);
dmpControllers.controller('aboutCtrl', aboutCtrIn);
/*依赖注入*/
aboutCtrIn.$inject = ["$scope", "$state", "$rootScope", "service", "$interval"];

function aboutCtrIn($scope, $state, $rootScope, service, $interval) {
	//点击商铺跳转到其页面
	$scope.test1 = function() {
			console.log(324234)
			$state.go("shop");
		}
		//点击关于我们跳转到相应页面
	$scope.call = function() {
		$state.go("about");
	}

	//点击追溯调用追溯接口
	$scope.traceback = function() {
		console.log(22222)
		$state.go("member_goTrace");
		var id;
		if($scope.psnumber == "Q/LMC0001S") {
			id = 1;
			sessionStorage.setItem("id", "1");

		} else {
			alert("请输入正确的追溯码")
		}
		console.log(id)
		$.ajax({
			url: "http://114.67.224.249/tea/product/getTeaById.do?tid=" + id,
			method: 'post',
			success: function(data) {
				console.log(data);
				$state.go("member_goTrace");
			}

		})
	}

	//点击新闻动态，跳转到新闻页面
	$scope.newmessage = function() {
		$state.go("news");
	}
}