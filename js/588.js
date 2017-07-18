/**
 * Created by Administrator on 2017/7/25.
 */
$(function(){

    //所有的都为true时才可以提交
    var activeName=false;
    var activePhone=false;
    //姓名不能为空
    $('#activeName').on("blur",function(){
        var name=$(this).val();
        if(name!==""){
            activeName = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#activeNumber").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            activePhone = true;
        }else{
            return false;
        };
    });
    //给表单绑定提交事件
    $('#activeSubmit').click(function(){
        if (activeName && activePhone){
            name=$("#activeName").val();
            phone=$("#activeNumber").val();
            //表单跳走
            goSubmit();
        }else if(activeName==false || activePhone==false){
            alert('输入不正确！');
            return false;
        }else{
            return false;
        };
    });
    // ajax提交数据
    function goSubmit(){
        $.ajax({
            type:'POST',
            url: '/home/suan',
            data:{name:name,phone:phone},
            dataType:'json',
            traditional: true,
            success:function(data){
                alert("报名成功");
            },
            error:function(err){
                alert("报名失败");
            }
        });
    };

});