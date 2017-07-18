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
    function shigong(){
        var fang_circle=$("#gongyi #fang ul .circle");
        var fang_square=$("#gongyi #fang ul .square");
        var n=0;
        fang_circle.each(function(index){
            $(this).on("mouseover",function(){
                clearInterval(timer);
                $(this).siblings(".square").animate({opacity:"1"}).show();
            });
            $(this).on("mouseout",function(){
                if(n<8){
                    var timer=setInterval(run,1000);
                }
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
    };

    //向下滚动时
    function toBottom(ele){
        var winHeight=$(window).height()*0.5;//可视窗口的高度的一半，更改0.5可以调整滚动到底部、中部、顶部时候开始加载
        var winScrollTop=$(window).scrollTop();//文档的滚动高度
        var ele_top=$(ele).offset().top;//内容区元素的top
        var ele_height=$(ele).height();//内容区元素的高
        //判断条件
        /*if(winScrollTop<ele_top-winHeight){
            $(ele).removeClass(clsName);
         }else */if((winScrollTop>ele_top-winHeight)&&(winScrollTop<ele_top+ele_height)){
            if($(ele).attr('class')=="fang"){
                shigong();
            }
            $(ele).addClass("animated fadeInUp");
        }/*else{
         $(ele).removeClass(clsName);
         }*/
    }
    //获取前一次的滚动高度（这里是第一次）
    var firstTop=$(window).scrollTop();
    $(window,document).on("scroll",function(){
        //每次滚动重新获取滚动高度
        var lastTop=$(this).scrollTop();
        //后一次滚动高度大于前一次滚动高，说明向下滚动，否则向上滚动！
        if(lastTop>firstTop){
            //加载对应的内容区域
            toBottom("#gongyi .inner #fang");
        };
        //每次都将后一次的滚动高度赋值给前一次的滚动高度
        firstTop=lastTop;
    });


    //预约提交
    var YuYueName=false;
    var YuYueNumber=false;
    //姓名不能为空
    $('#YuYueName').on("blur",function(){
        var name=$(this).val();
        if(name!==""){
            YuYueName = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#YuYueNumber").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            YuYueNumber = true;
        }else{
            return false;
        };
    });
    //给表单绑定提交事件
    $('#yuyue').click(function() {
        if (YuYueName&&YuYueNumber) {
            //当名称、手机号都不为空时候，
            //先判断选择的区域，进行分类计算，最后输出到右边的区域
            name=$("#YuYueName").val();
            phone=$("#YuYueNumber").val();
            //表单跳走
            tsou();
        }else if(YuYueName==false|| YuYueNumber==false){
            alert('输入不正确！');
            return false;
        }else{
            //阻止默认行为
            return false;
        };
    });
    // ajax发送计算器数据
    function tsou(){
        $.ajax({
            type:'POST',
            url: '/home/suan',
            data:{name:name,phone:phone},
            dataType:'json',
            traditional: true,
            success:function(data){
                alert("提交成功");
            },
            error:function(err){
                alert("提交失败");
            }
        });
    };

});