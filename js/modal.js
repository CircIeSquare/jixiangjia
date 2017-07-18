/**
 * Created by Administrator on 2017/7/26.
 */
$(function(){

    //领取模态框弹窗
    var liji=$("#haoli .picText .liji");
    var modal_bg=$("#modal-bg");
    var modal=$("#modal");
    var close=$("#close");
    var ling=$("#modal #ling");
    liji.on("click",function(){
        modal_bg.css({"display":"block","z-index":"50"}).removeClass("zoomOutUp").addClass("animated zoomInUp");
        modal.css("display","block").removeClass("zoomOutUp").addClass("animated zoomInUp").css("opacity","1");
    });
    close.on("click",function(){
        modal_bg.removeClass("zoomInUp").addClass("animated zoomOutUp").css({"z-index":"0"});
        modal.removeClass("zoomInUp").addClass("animated zoomOutUp").css({"opacity":"0","display":"none"});
    });

    //弹窗表单验证提交
    var LQname=false;
    var LQphone=false;
    //姓名不能为空
    $('#lingqu-name').on("blur",function(){
        if($('#lingqu-name').val()){
            LQname = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#lingqu-number").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            LQphone = true;
        }else{
            return false;
        };
    });
    //提交
    ling.on("click",function(){
        if (LQname&&LQphone){
            name=$("#lingqu-name").val();
            phone=$("#lingqu-number").val();
            //表单跳走
            tsou();
        }else if(LQname==false||LQphone==false){
            alert('输入不正确！');
            return false;
        }else{
            //阻止默认行为
            return false;
        };
    });
    // ajax发送提交数据
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