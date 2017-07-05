/**
 * Created by Administrator on 2017/6/16.
 */
$(function(){

    //五大空间配置 切换
    var $btn=$("#kongjian .picText .text").find("li");
    var $tab=$("#kongjian .picText .pic").find("li");
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

    //施工工艺 显示隐藏
    var fang_circle=$("#gongyi #fang ul .circle");
    var fang_square=$("#gongyi #fang ul .square");
    var n=0;
    fang_circle.each(function(index){
        $(this).on("mouseover",function(){
            clearInterval(timer);
            /*$(this).find(":before").animate({opacity:"1"}).fadeIn();
            $(this).find(":after").animate({opacity:"1"}).fadeIn();*/
            $(this).siblings(".square").animate({opacity:"1"}).show();
        });
        $(this).on("mouseout",function(){
            if(n<8){
                var timer=setInterval(run,1000);
            }
            /*$(this).find(":before").animate({opacity:"0"}).fadeOut();
            $(this).find(":after").animate({opacity:"0"}).fadeOut();*/
            $(this).siblings(".square").animate({opacity:"0"}).hide();
        });
    });
    var timer=setInterval(run,1000);
    function run(){
        n++;
        if(n>=8){
            clearInterval(timer);
        }
        fang_square.eq(n).animate({opacity:"1"},"fast","linear",function(){
            $(this).animate({opacity:"0"});
        });
    };

    /*$(document).on("scroll",function(){
        //alert($(document).height());
        //var $fang=$("#fang");
        var $fang=document.getElementById("#fang");
        alert($fang);
        var obj=getElementPosition($fang);
        //alert("x:"+obj.x+";y:"+obj.y);
    });

    function getElementPosition(e){
        var x = 0, y = 0;
        while(e != null) {
            x += e.offsetLeft;
            y += e.offsetTop;
            e = e.offsetParent;
        }
        return { x: x, y: y };
    }*/

    //所有的都为true时才可以提交
    var YuYueName=false,YuYuePhone=false

    //姓名不能为空
    $('#YuYueName').on("blur",function(){
        if($(this).val()){
            YuYueName = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#YuYuePhone").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            YuYuePhone = true;
        }else{
            return false;
        };
    });
    //给表单绑定提交事件
    $('#yuyue').click(function() {

        if (YuYueName&&YuYuePhone) {
            //当名称、手机号都不为空时候，
            //先判断选择的区域，进行分类计算，最后输出到右边的区域
            name=$("#YuYueName").val();
            phone=$("#YuYuePhone").val();

            //表单跳走
            tsou();
        }else if(YuYueName==false || YuYuePhone==false){
            alert('输入不合法！');
            return false;
        }else{
            //阻止默认行为
            return false;
        };
    });

    // ajax发送计算器数据
    function tsou(){
        $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
            type:'POST',
            url: '/home/suan',
            data:{name:name,phone:phone},
            dataType:'json',
            traditional: true,
        });
    };

});