/**
 * Created by Administrator on 2017/6/21.
 */
/*切换*/
$(function(){
    var $li=$(".anli .anli-title li");
    var $cont=$(".anli .inner .cont");

    //var shijing=$("#shijing");
    //var vr=$("#vr");

    $li.each(function(index){
        $(this).on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            $cont.eq(index).fadeIn().siblings().fadeOut();
        });
    });

   /* shijing.on("click",function(){
        $(this).addClass("active").siblings.removeClass();
        $("#cont1").css("disply","block");
        $("#cont2").css("disply","none");
    });
    vr.on("click",function(){
        $(this).addClass("active").siblings.removeClass();
        $("#cont2").css("disply","block");
        $("#cont2").css("disply","none");
    });*/
});
