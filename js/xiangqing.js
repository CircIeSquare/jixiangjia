/**
 * Created by Administrator on 2017/7/1.
 */
$(function(){
    //五大空间配置 切换
    var $btn=$("#xiangqing .cont .right li");
    var $tab=$("#xiangqing .cont .left .pic li");
    $tab.eq(0).show();
    $btn.each(function(index){
        $(this).on("mouseover",function(){
            //n=index;
            $(this).addClass("active").siblings().removeClass();
            $tab.eq(index).stop().fadeIn().siblings().fadeOut();
        });
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass();
            $tab.eq(index).stop().fadeIn().siblings().fadeOut();
        });
    });
});