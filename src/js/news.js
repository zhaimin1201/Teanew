'use strict';//使用严格模式
var dmpControllers = angular.module('NewsController', ['dmpServices']);
dmpControllers.controller('newsCtrl',newsCtrIn);
/*依赖注入*/
newsCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function newsCtrIn($scope,$state,$rootScope,service,$interval){
	
	var results;
	$.ajax({
    	 	url:"http://114.67.224.249/tea/news/getNews.do",
    	 	method:'post', 
    	 	async:false,//设置同步操作才可以赋值给全局
            success:function(data){            	
            	results=data;   
            	return false;
            }       
   });
    $scope.imgpage=results.image;
    layui.use(['laypage', 'layer'], function(){
		var laypage = layui.laypage
		,layer = layui.layer;
		laypage.render({
		    elem: 'demo7',    
		    count: results.length,
		    limit:4,
		    layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
		    jump: function(obj){
		    	console.log(results);
		    	document.getElementById('biuuu_city_list').innerHTML = function(){
		    		var arr=[];
		    		var thisData = results.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
			    	layui.each(thisData, function(index, item){
			          console.log(item.content);
			          arr.push(
			          	'<div class="media-body">'+
			          		'<a class="pull-left" href="#">'+
			          			'<img class="media-object" width="220px" height="160px" src=' + item.image  +'>'+
			          		'</a>'+
			          		'<div class="media-body">'+
			          			'<h4 class="media-heading new_title">'+item.title+'</h4>'+
			          			'<p class="new_con">'+item.content+'</p>'+
			          		'</div>'+
			          	'</div>'			          
			          )
			          console.log(item.image);
			          $('img').attr=('src',item.image);
			          
			        });   
			        return arr.join('');
		    	}();
		    	
		    	
		    }
		});	
	});
    
}

