layui.use(['carousel','element'], function(){
  var carousel = layui.carousel;
  var carousel2 = layui.carousel;
  var element = layui.element;
  //建造实例
carousel.render({
    elem: '#test1'
    ,width: '100%' //设置容器宽度
    ,arrow: 'always' //始终显示箭头
    //,anim: 'updown' //切换动画方式
});
  carousel2.render({
    elem: '#test2'
    ,width: '100%' //设置容器宽度
    ,arrow: 'none' 
    //,anim: 'updown' //切换动画方式
  });
});