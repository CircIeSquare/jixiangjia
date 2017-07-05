/**
 * Created by Administrator on 2017/6/15.
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
    function changeNewOld(){
        var xj_index=$("#baojia #select-xinjiu").find(".active").index();
        if(xj_index==0){
            console.log("新房");
        }else if(xj_index==1){
            console.log("旧房");
        };
    };

    //所有的都为true时才可以提交
    var BJname=false,BJphone=false,BJmianji=false;BJyanzheng=false;
    //单价588每平米，不区分区域，全国统一价
    var dj=588;
    var alertMianji="[面积输入错误]";
    var alertNames="[姓名输入错误]";
    var alertPhone="[手机号码非法]";
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
        if($(this).val()){
            BJname = true;
        }else{
            return false;
        };
    });
    //手机号不能为空
    $("#BJphone").on("blur",function(){
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
            //先判断选择的区域，进行分类计算，最后输出到右边的区域
            //quyu=$("#quyu i").text();
            mianjis=$("#BJmianji").val();
            name=$("#BJname").val();
            phone=$("#BJphone").val();

            //表单跳走
            tsou();
        }else if(BJmianji==false || BJname==false || BJphone==false){
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
            data:{name:name,mianji:mianjis,phone:phone},
            dataType:'json',
            traditional: true,
        });
    };

    //品牌图片滚动

    var $od1=$("#pingpai .wraper .pai .ul-wrap1");
    var $au1=$("#pingpai .wraper .pai .ul-wrap1 .ul-1");
    //picRun($od1,$au1);

    var $od=$("#pingpai .wraper .pai .ul-wrap2 .ul-wrap");
    var $au=$("#pingpai .wraper .pai .ul-wrap2 .ul-wrap .ul-2");
    picRun($od,$au);

    function picRun(od,au){
        var timer=null;
        var speed=4;
        //var $od=$("#pingpai .wraper .pai .ul-wrap2 .ul-wrap");
        //var $au=$("#pingpai .wraper .pai .ul-wrap2 .ul-wrap .ul-2");
        var $od=od;
        var $au=au;

        var tmp=$au.html()+$au.html();
        $au.html(tmp);
        var $ali=$au.find("li");
        var ali_w=$ali.eq(0).width();

        $au.width(ali_w*$ali.length+"px");
        timer=setInterval(move,80);
        function move(){
            if(parseFloat($au.css("left"))<-$au.width()/2){
                $au.css("left","0");
            };
            if(parseFloat($au.css("left"))>0){
                $au.css("left",-$au.width()/2+"px");
            };
            $au.css("left",parseFloat($au.css("left"))+speed+"px");
        };
        $od.on("mouseover",function(){
            clearInterval(timer);
        });
        $od.on("mouseout",function(){
            timer=setInterval(move,30)
        });
    };

});
