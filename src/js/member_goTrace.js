'use strict';//使用严格模式
var dmpControllers = angular.module('MemberController', ['dmpServices']);
dmpControllers.controller('memberCtrl',memberCtrIn);
/*依赖注入*/
memberCtrIn.$inject=["$scope","$state","$rootScope","service","$interval"];
function memberCtrIn($scope,$state,$rootScope,service,$interval){
	var id = sessionStorage.getItem("id");
	var brandname;  //商品名称
	var date_tea;   //生产日期
	var faddress;   //生产企业 
	var province;   //生产基地
	var level;      //认证类别
	

	$.ajax({
    	 	url:"http://114.67.224.249/tea/product/getTeaById.do?tid="+id,
    	 	method:'post', 
    	 	async:false,
            success:function(data){
            	brandname=data.brandname;
            	date_tea=data.date;
            	faddress=data.faddress;
            	faddress=data.faddress;
            	province=data.province;
            	level=data.level;
            	return false;
            }
                    
   })
	//田间操作
	$scope.items=[{
		"content": "品种选择：选用高产抗病、适制性好、制优率高的茶树优良品种，集中连片30～50亩以上茶园早中晚熟品种应各占1/3为宜，为确保移栽成活率，茶苗出圃后，茶苗根系应沾黄泥浆",
		"date": "2017-08-08",
		"operator": "时述发",
		"standard": "品种选择",
	}, {
		"content": "茶苗规格：无茶根结线虫、茶根蚧、茶饼病、根癌病等危险性病虫.",
		"date": "2017-09-01",
		"operator": "时述发",
		"standard": "茶苗规格"
	}, {
		"content": "起苗出圃：起苗前，先灌水浸透苗床。",
		"date": "2017-10-01",
		"operator": "时述发",
		"standard": "起苗出圃"
	}, {
		"content": "种植时期：一般以幼苗休萌期为宜。春栽以立春至惊蛰为好，秋栽以寒露、霜降前后的小阳春气候为好。",
		"date": "2017-10-20",
		"operator": "时述发",
		"standard": "种植时期"
	}]	
	//施肥信息
	$scope.items2=[{
		"content": "用玉米、大豆，花生饼粕经膨化发酵后做基肥",
		"date": "2017 -08-08",
		"operator": "王贵",
		"standard": "每亩地500公斤",
		"operating":"花生饼粕经膨化发酵后做基肥"
	}, {
		"content": "海状元海藻有机肥",
		"date": "2017-09-01",
		"operator": "王贵",
		"standard": "每次每亩10公斤",
		"operating":"每隔20-30天，随浇水施入海藻有机肥"
	}, {
		"content": "海状元海藻有机肥",
		"date": "2017-10-01",
		"operator": "王贵",
		"standard": "每次每亩10公斤",
		"operating":"每隔20-30天，随浇水施入海藻有机肥"
	}, {
		"content": "海状元海藻有机肥",
		"date": "2017-10-20",
		"operator": "王贵",
		"standard": "每次每亩10公斤	",
		"operating":"每隔20-30天，随浇水施入海藻有机肥"
	}]
	//用药信息
	$scope.items3=[{
		"content": "诱虫灯",
		"date": "2017-08-08",
		"operator": " ",
		"standard": "一个棚挂3盏灯",
		"operating":"各种害虫的成虫，能飞的害虫",
		"rate":""
	}, {
		"content": "多菌灵、百泰",
		"date": "2017-09-01",
		"operator": "王贵",
		"standard": "",
		"operating":"各种害虫的成虫，能飞的害虫",
		"rate":"500倍液"
	
	}, {
		"content": "黄板",
		"date": "2017-10-01",
		"operator": "王贵",
		"standard": "",
		"operating":"真菌性病害，白粉虱",
		"rate":""
	}, {
		"content": "硫磺熏蒸器",
		"date": "2017-10-20",
		"operator": "王贵",
		"standard": "",
		"operating":"真菌性病害，白粉虱",
		"rate":"器械"
	}, {
		"content": "多抗霉素",
		"date": "2017-10-20",
		"operator": "王贵",
		"standard": "每隔5米悬挂2张	",
		"operating":"真菌性病害，白粉虱",
		"rate":"500倍液"
	},{
		"content": "硫磺熏蒸器",
		"date": "2017-10-20",
		"operator": "王贵",
		"standard": "",
		"operating":"真菌性病害，白粉虱",
		"rate":"器械"
	}]
	//加工信息
	$scope.process="2017-06-05";
	$scope.work="将茶叶进行封装整理";
	$scope.people="王建斌";
	//包装信息
	$scope.dateB="2017-06-08";
	$scope.specification="1公斤"
	$scope.priceB="60";
	//监测信息
	$scope.items4=[{
		"content": "药物残留",
		"date": "2017-09-08",
		"operator": "茉莉花茶专业合作社",
		"standard": "合格"
	},{
		"content": "药物残留",
		"date": "2017-09-10",
		"operator": "茉莉花茶专业合作社",
		"standard": "合格"
	},{
		"content": "药物残留",
		"date": "2017-09-12",
		"operator": "茉莉花茶专业合作社",
		"standard": "合格"
	}]
	
	
	$scope.brandname=brandname;
	$scope.date_tea=date_tea;
	$scope.faddress=faddress;
	$scope.province=province;
	$scope.level=level;
}

