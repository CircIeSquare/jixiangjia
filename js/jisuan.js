/**
 * Created by Administrator on 2017/6/28.
 */

$(function(){

    //自定义的选择区域下拉列表
    var s_title=$("#jisuan .quyu");
    var s_select=$("#jisuan .select_box ul li");
    //点击下拉列表标题时的样式
    s_title.click(function(e){
        $(this).addClass("i_active");
        //$(this).next("ul").show();
        $("#jisuan .select_box").show();
        e.stopPropagation();
    });
    //选中下拉列表选项的样式
    s_select.click(function(){
        var s_text=$(this).html();
        //var s_title_2=$(this).parent('ul').prev("i");
        var s_title_2=$("#jisuan .quyu span");
        s_title_2.html(s_text).removeClass("i_active");
        //$(this).parent('ul').hide();
        $("#jisuan .select_box").hide();
    });
    //点击DOM阻止事件冒泡
    $(document).click(function(){
        s_title.removeClass("i_active");
        $("#jisuan .select_box").hide();
    });



    //计算器计算

    //所有的都为true时才可以提交
    var fname=false,fphone=false,fmianji=false;
    //单价588每平米，不区分区域，全国统一价
    var dj=588;
    var alertMianji="[面积输入错误]";
    var alertNames="[姓名输入错误]";
    var alertPhone="[手机号码非法]";
    //面积不能为空
    $('#mianji').on("blur",function(){
        var mianji=$(this).val();
        mianjis = mianji.replace(/[^0-9]/ig,"");
        if(/^[1-9]\d*$/.test(mianji)){
            fmianji = true;
        }else{
            return false;
        };
    });
    //姓名不能为空
    $('#name').on("blur",function(){
        if($(this).val()){
            fname = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#phone").on("blur",function(){
        var phone=$(this).val();
        if(/^1[3578]\d{9}$/.test(phone)){
            fphone = true;
        }else{
            return false;
        };
    });
    //给表单绑定提交事件
    $('#center-btn').click(function() {

        if (fname && fmianji && fphone) {
            //当名称、面积、手机号都不为空时候，
            //先判断选择的区域，进行分类计算，最后输出到右边的区域
            //quyu=$("#quyu i").text();
            mianjis=$("#mianji").val();
            name=$("#name").val();
            phone=$("#phone").val();

            var yusuan=$("#jisuan .right-form .shigong");
            var QByusuan=$("#jisuan .right-form .quanbu");
            //施工预算和全部预算
            yusuan.text((dj*parseFloat(mianjis)/10000).toFixed(2));
            if(yusuan.text()!=""){
                QByusuan.text((parseFloat(yusuan.text())+5).toFixed(2));
            };
            //右边装修价格比例
            $("#jisuan .right-form .ws").text(parseFloat(QByusuan.text()*10000*0.2).toFixed(2));
            $("#jisuan .right-form .kt").text(parseFloat(QByusuan.text()*10000*0.2).toFixed(2));
            $("#jisuan .right-form .cff").text(parseFloat(QByusuan.text()*10000*0.2).toFixed(2));
            $("#jisuan .right-form .cs").text(parseFloat(QByusuan.text()*10000*0.2).toFixed(2));
            $("#jisuan .right-form .yt").text(parseFloat(QByusuan.text()*10000*0.1).toFixed(2));
            $("#jisuan .right-form .qt").text(parseFloat(QByusuan.text()*10000*0.1).toFixed(2));
            //表单跳走
            tsou();
        }else if(fmianji==false || fname==false || fphone==false){
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
            data:{name:name,mianji:mianjis,phone:phone,quyu:quyu},
            dataType:'json',
            traditional: true,
        });
    };


});