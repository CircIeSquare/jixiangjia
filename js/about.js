/**
 * Created by Administrator on 2017/7/23.
 */
$(function(){

    //所有的都为true时才可以提交
    var aboutName=false;
    var aboutPhone=false;
    //姓名不能为空
    $('#about-name').on("blur",function(){
        var name=$(this).val();
        if(name!==""){
            aboutName = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#about-number").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            aboutPhone = true;
        }else{
            return false;
        };
    });
    //给表单绑定提交事件
    $('#about-submit').click(function(){
        if (aboutName && aboutPhone){
            name=$("#about-name").val();
            phone=$("#about-number").val();
            message=$("#about-message").val();

            //表单跳走
            goSubmit();
        }else if(aboutName==false || aboutPhone==false){
            alert('输入不正确！');
            return false;
        }else{
            return false;
        };
    });

    // ajax发送计算器数据
    function goSubmit(){
        $.ajax({
            type:'POST',
            url: '/home/suan',
            data:{name:name,phone:phone,message:message},
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

})