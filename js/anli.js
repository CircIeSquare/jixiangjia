/**
 * Created by Administrator on 2017/6/21.
 */
/*切换*/
$(function(){
    var $li=$(".anli .anli-title li");
    var $cont=$(".anli .inner .content-wrap .cont-wrap");

    $li.each(function(index){
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            $cont.eq(index).fadeIn().siblings().fadeOut();
        });

        $cont.eq(index).children(".geng").on("click",function(){
            $cont.eq(index).find(".hide-ul").fadeIn();
            $cont.eq(index).find(".geng").fadeOut();
        });

    });

});
