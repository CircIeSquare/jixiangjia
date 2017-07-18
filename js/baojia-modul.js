/**
 * Created by Administrator on 2017/7/27.
 */
$(function(){

    //报价单选按钮
    var baojia_xin=$("#baojia_xin");
    var baojia_jiu=$("#baojia_jiu");
    baojia_xin.on("click",function(){
        $(this).parents("li").addClass("active");
        baojia_jiu.parents("li").removeClass("active");
        changeNewOld();
    });
    baojia_jiu.on("click",function(){
        $(this).parents("li").addClass("active");
        baojia_xin.parents("li").removeClass("active");
        changeNewOld();
    });
    //判断单选按钮选择是新房还是旧房
    changeNewOld();
    var fang="新房";
    function changeNewOld(){
        var xj_index=$("#baojia #select-xinjiu").find(".active").index();
        if(xj_index==0){
            fang="新房";
            console.log(fang);
        }else if(xj_index==1){
            fang="旧房";
            console.log(fang);
        };
    };

    //报价模块表单验证提交
    var BJname=false;
    var BJphone=false;
    var BJmianji=false;
    //单价588每平米，不区分区域，全国统一价
    var dj=588;
    //面积不能为空
    $('#BJmianji').on("blur",function(){
        var mianji=$(this).val();
        mianjis = mianji.replace(/[^0-9]/ig,"");
        if(/^[1-9]\d*$/.test(mianji)){
            BJmianji = true;
        }else{
            return false;
        };
    });
    //姓名不能为空
    $('#BJname').on("blur",function(){
        if($('#BJname').val()){
            BJname = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#BJnumber").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            BJphone = true;
        }else{
            return false;
        };
    });
    //给表单绑定提交事件
    $('#liji-baojia').click(function(){
        if (BJname && BJmianji && BJphone){
            //当名称、面积、手机号都不为空时候，
            mianjis=$("#BJmianji").val();
            name=$("#BJname").val();
            phone=$("#BJnumber").val();

            //表单跳走
            tsou();
        }else if(BJmianji==false || BJname==false || BJphone==false){
            alert('输入不正确！');
            return false;
        }else{
            //阻止默认行为
            return false;
        };
    });
    // ajax提交数据
    function tsou(){
        $.ajax({
            type:'POST',
            url: '/home/suan',
            data:{name:name,mianji:mianjis,phone:phone},
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