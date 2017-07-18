/**
 * Created by Administrator on 2017/6/15.
 */
$(function(){

    var province=[
        {
            name:"全国",
            city:[
                {name:"全国"}
            ]
        },
        {
            name:"西南大区",
            city:[
                {name:"长沙"},
                {name:"四川"},
                {name:"重庆"},
                {name:"南昌"}
            ]
        },
        {
            name:"华南大区",
            city:[
                {name:"广州"},
                {name:"深圳"},
                {name:"佛山"},
                {name:"福州"}
            ]
        },
        {
            name:"华东大区",
            city:[
                {name:"上海"},
                {name:"湖南"},
                {name:"杭州"},
                {name:"苏州"}
            ]
        },
        {
            name:"华中大区",
            city:[
                {name:"武汉"},
                {name:"郑州"},
                {name:"合肥"}
            ]
        },
        {
            name:"华北大区",
            city:[
                {name:"北京"},
                {name:"天津"},
                {name:"石家庄"}
            ]
        }
    ];

    //header部分选择区域
    var header_city=$(".header .top .message .city");
    //var header_select=$(".header .top .message .selec");
    var header_hasArea=$(".header .top .message .has-area ul");
    header_city.attr("data-value",province[0].name);

    //遍历JSON,将所有大区填充到header选择区域
    init();
    function init(){
        var header_hasArea=$(".header .top .message .has-area ul");
        for(var i=1;i<province.length;i++){
            var $temp=$('<li>'+province[i].name+"</li>");
            header_hasArea.append($temp);
        };
    };

    var header_hasArea_li=$(".header .top .message .has-area ul li");
    header_hasArea_li.on("click",function(){
        var tmp=$(this).text();
        header_city.text(tmp).attr("data-value",tmp);

        var AreaNew=$(".header .top .message .city").text();
        $("#baojia .BJ-quyu .select-quyu").empty();
        //$("#baojia .BJ-quyu .select-quyu").find("li").eq(0).siblings().remove();

        if(AreaNew=="全国"){
            for(var i=0;i<province[0].city.length;i++){
                var $temp=$('<li>'+province[0].city[i].name+"</li>");
                $("#baojia .BJ-quyu .select-quyu").append($temp);
            };
        }else if(AreaNew=="西南大区"){
            for(var i=0;i<province[1].city.length;i++){
                var $temp=$('<li>'+province[1].city[i].name+"</li>");
                $("#baojia .BJ-quyu .select-quyu").append($temp);
            };
        }else if(AreaNew=="华南大区"){
            for(var i=0;i<province[2].city.length;i++){
                var $temp=$('<li>'+province[2].city[i].name+"</li>");
                $("#baojia .BJ-quyu .select-quyu").append($temp);
            };
        }else if(AreaNew=="华东大区"){
            for(var i=0;i<province[3].city.length;i++){
                var $temp=$('<li>'+province[3].city[i].name+"</li>");
                $("#baojia .BJ-quyu .select-quyu").append($temp);
            };
        }else if(AreaNew=="华中大区"){
            for(var i=0;i<province[4].city.length;i++){
                var $temp=$('<li>'+province[4].city[i].name+"</li>");
                $("#baojia .BJ-quyu .select-quyu").append($temp);
            };
        }else if(AreaNew=="华北大区"){
            for(var i=0;i<province[5].city.length;i++){
                var $temp=$('<li>'+province[5].city[i].name+"</li>");
                $("#baojia .BJ-quyu .select-quyu").append($temp);
            };
        };

        //报价选择区域
        var s_select=$("#baojia .BJ-quyu .select-quyu li");
        s_select.each(function(index){
            $(this).on("click",function(){
                var s_text=$(this).text();
                var s_title_2=$("#baojia #BJ-area");
                s_title_2.text(s_text);
                select_ul.hide();
            });
        });

    });


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
            //console.log("新房");
            console.log(fang);
        }else if(xj_index==1){
            fang="旧房";
            //console.log("旧房");
            console.log(fang);
        };
    };

    //选择报价区域
    //自定义的选择区域下拉列表
    var s_title=$("#baojia .BJ-quyu #BJ-area");
    var select_ul=$("#baojia .BJ-quyu .select-quyu");

    //点击下拉列表标题时的样式
    s_title.click(function(e){
        //var AreaNew=$(".header .top .message .city").text();

        //清空模块下拉框里的其他值，保留默认值
        //select_ul.find("li").eq(0).siblings().remove();
        //select_ul.empty();

        select_ul.show();
        e.stopPropagation();
    });

    var s_select=$("#baojia .BJ-quyu .select-quyu li");
    //选中下拉列表选项的样式
    s_select.each(function(index){
        $(this).on("click",function(){
            var s_text=$(this).text();
            /*var s_title_2=$("#baojia #BJ-area");
            s_title_2.text(s_text);*/
            //s_title=$("#baojia .BJ-quyu #BJ-area");
            s_title.text(s_text);
            select_ul.hide();
        });
    });
    //点击DOM阻止事件冒泡
    $(document).click(function(){
        //s_title.removeClass("i_active");
        select_ul.hide();
    });


    //所有的都为true时才可以提交
    var BJname=false;
    var BJphone=false;
    var BJmianji=false;
    //BJyanzheng=false;
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
            //先判断选择的区域，进行分类计算，最后输出到右边的区域
            //quyu=$("#quyu i").text();
            mianjis=$("#BJmianji").val();
            name=$("#BJname").val();
            phone=$("#BJnumber").val();

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
            //headers: {'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
            type:'POST',
            url: '/home/suan',
            data:{name:name,mianji:mianjis,phone:phone},
            dataType:'json',
            traditional: true,
            success:function(data){
                //console.log(data);
                alert("提交成功");
            },
            error:function(err){
                //console.log(err);
                alert("提交失败");
            }
        });
    };

    //品牌图片滚动
    var od=$("#pingpai .wraper .pai .ul-wrap2 .ul-wrap");
    var au=$("#pingpai .wraper .pai .ul-wrap2 .ul-wrap .ul-2");
    picRun(od,au);

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
            //当往右移动，left为正时，将ul的left设置为-width/2;
            if(parseFloat($au.css("left"))>0){
                $au.css("left",-$au.width()/2+"px");
            };
            //一开始left增加，往右移动
            $au.css("left",parseFloat($au.css("left"))+speed+"px");
        };
        $od.on("mouseover",function(){
            clearInterval(timer);
        });
        $od.on("mouseout",function(){
            timer=setInterval(move,30);
        });
    };


    //好礼领取弹出模态框
    var liji=$("#haoli .picText .liji");
    var modal_bg=$("#modal-bg");
    var modal=$("#modal");
    var close=$("#close");
    var ling=$("#modal #ling");

    liji.on("click",function(){
        //event.preventDefault();
        modal_bg.fadeIn("100","swing");
        modal.css("display","block").removeClass("zoomOutUp").addClass("animated zoomInUp").css("opacity","1");
    });
    close.on("click",function(){
        modal.removeClass("zoomInUp").addClass("animated zoomOutUp").css({"opacity":"0","display":"none"});
        modal_bg.fadeOut("100","swing");
    });

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
            alert('输入不合法！');
            return false;
        }else{
            //阻止默认行为
            return false;
        };
    });

});
