/**
 * Created by Administrator on 2017/6/15.
 */
$(function(){

    var province=[
        {
            areaName:"全国",
            detail:[
                {
                    name:"全国",
                    city:[
                        {name:"全国"}
                    ]
                }
            ]
        },
        {
            areaName:"华北",
            detail:[
                {
                    name:"北京",
                    city:[
                        {name:"东城区"},{name:"西城区"},{name:"朝阳区"},{name:"丰台区"},{name:"石景山区"},{name:"海淀区"},{name:"顺义区"},{name:"通州区"},
                        {name:"大兴区"},{name:"房山区"},{name:"门头沟区"},{name:"昌平区"},{name:"平谷区"},{name:"密云区"},{name:"怀柔区"},{name:"延庆区"}
                    ]
                },
                {
                    name:"天津",
                    city:[
                        {name:"和平区"},{name:"河东区"},{name:"河西区"},{name:"南开区"},{name:"河北区"},{name:"红桥区"},{name:"滨海新区"},{name:"东丽区"},
                        {name:"西青区"},{name:"津南区"},{name:"津南区"},{name:"北辰区"},{name:"武清区"},{name:"宝坻区"},{name:"宁河区"},{name:"静海区"},
                        {name:"蓟州区"}
                    ]
                },
                {
                    name:"石家庄",
                    city:[
                        {name:"新华区"},{name:"桥西区"},{name:"长安区"},{name:"裕华区"},{name:"井陉矿区"},{name:"藁城区"},{name:"鹿泉区"},{name:"栾城区"}
                    ]
                }
            ]
        },
        {
            areaName:"华东",
            detail:[
                {
                    name:"杭州",
                    city:[
                        {name:"上城区"},{name:"下城区"},{name:"西湖区"},{name:"拱墅区"},{name:"江干区"},{name:"滨江区"},{name:"萧山区"},{name:"余杭区"}
                    ]
                },
                {
                    name:"苏州",
                    city:[
                        {name:"姑苏区"},{name:"虎丘区"},{name:"吴中区"},{name:"相城区"},{name:"吴江区"}
                    ]
                },
                {
                    name:"南京",
                    city:[
                        {name:"玄武区"},{name:"白下区"},{name:"秦淮区"},{name:"建邺区"},{name:"鼓楼区"},{name:"下关区"},{name:"栖霞区"},{name:"雨花台区"},
                        {name:"浦口区"},{name:"江宁区"},{name:"六合区"}
                    ]
                },
                {
                    name:"上海",
                    city:[
                        {name:"静安区"},{name:"普陀区"},{name:"闸北区"},{name:"虹口区"},{name:"南汇区"},{name:"杨浦区"},{name:"宝山区"},{name:"闵行区"},
                        {name:"嘉定区"},{name:"奉贤区"},{name:"松江区"},{name:"金山区"},{name:"青浦区"},{name:"浦东新区"},{name:"黄浦区"},{name:"卢湾区"},
                        {name:"徐汇区"},{name:"长宁区"}, {name:"崇明区"}
                    ]
                }
            ]
        },
        {
            areaName:"华南",
            detail:[
                {
                    name:"广州",
                    city:[
                        {name:"荔湾区"},{name:"越秀区"},{name:"海珠区"},{name:"天河区"},{name:"白云区"},{name:"黄埔区"},{name:"增城区"},{name:"花都区"},
                        {name:"从化区"},{name:"番禺区"},{name:"南沙区"}
                    ]
                },
                {
                    name:"深圳",
                    city:[
                        {name:"福田区"},{name:"罗湖区"},{name:"南山区"},{name:"盐田区"},{name:"宝安区"},{name:"龙岗区"},{name:"光明新区"},{name:"大鹏新区"}
                    ]
                },
                {
                    name:"厦门",
                    city:[
                        {name:"海沧区"},{name:"湖里区"},{name:"集美区"},{name:"思明区"},{name:"同安区"},{name:"翔安区"}
                    ]
                }
            ]
        },
        {
            areaName:"华中",
            detail:[
                {
                    name:"武汉",
                    city:[
                        {name:"江岸区"},{name:"江汉区"},{name:"硚口区"},{name:"汉阳区"},{name:"武昌区"},{name:"洪山区"},
                        {name:"青山区"},{name:"东西湖区"},{name:"蔡甸区"},{name:"江夏区"},{name:"黄陂区"},{name:"新洲区"},{name:"汉南区"}
                    ]
                },
                {
                    name:"合肥",
                    city:[
                        {name:"瑶海区"},{name:"庐阳区"},{name:"蜀山区"},{name:"包河区"}
                    ]
                },
                {
                    name:"郑州",
                    city:[
                        {name:"中原区"},{name:"二七区"},{name:"金水区"},{name:"惠济区"},{name:"管城区"},{name:"上街区"}
                    ]
                },
                {
                    name:"西安",
                    city:[
                        {name:"碑林区"},{name:"灞桥区"},{name:"雁塔区"},{name:"阎良区"},{name:"未央区"},{name:"新城区"},{name:"长安区"},{name:"临潼区"},{name:"高陵区"},{name:"鄠邑区"}
                    ]
                },
            ]
        },
        {
            areaName:"西南",
            detail:[
                {
                    name:"长沙",
                    city:[
                        {name:"芙蓉区"},{name:"天心区"},{name:"岳麓区"},{name:"开福区"},{name:"雨花区"},{name:"望城区"}
                    ]
                },
                {
                    name:"成都",
                    city:[
                        {name:"锦江区"},{name:"青羊区"},{name:"金牛区"},{name:"武侯区"},{name:"成华区"},{name:"龙泉驿区"},
                        {name:"青白江区"},{name:"新都区"},{name:"温江区"},{name:"双流区"},{name:"郫都区"}
                    ]
                },
                {
                    name:"重庆",
                    city:[
                        {name:"渝中区"},{name:"大渡口区"},{name:"江北区"},{name:"沙坪坝区"},{name:"九龙坡区"},{name:"南岸区"},
                        {name:"北碚区"},{name:"渝北区"},{name:"巴南区"},{name:"涪陵区"},{name:"綦江区"},{name:"大足区"},{name:"长寿区"},
                        {name:"江津区"},{name:"合川区"},{name:"永川区"},{name:"南川区"},{name:"璧山区"},{name:"铜梁区"},{name:"潼南区"},
                        {name:"荣昌区"},{name:"万州区"},{name:"黔江区"},{name:"梁平区"},{name:"开州区"}
                    ]
                }
            ]
        }
    ];
    var newProvince=[
        ["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","顺义区","通州区",
        "大兴区","房山区","门头沟区","昌平区","平谷区","密云区","怀柔区","延庆区"],
        ["和平区","河东区","河西区","南开区","河北区","红桥区","滨海新区","东丽区",
        "西青区","津南区","北辰区","武清区","宝坻区","宁河区","静海区","蓟州区"],
        ["新华区","桥西区","长安区","裕华区","井陉矿区","藁城区","鹿泉区","栾城区"],
        ["上城区","下城区","西湖区","拱墅区","江干区","滨江区","萧山区","余杭区"],
        ["姑苏区","虎丘区","吴中区","相城区","吴江区"],
        ["玄武区","白下区","秦淮区","建邺区","鼓楼区","下关区","栖霞区","雨花台区", "浦口区","江宁区","六合区"],
        ["静安区","普陀区","闸北区","虹口区","南汇区","杨浦区","宝山区","闵行区","嘉定区","奉贤区","松江区","金山区",
        "青浦区","浦东新区","黄浦区","卢湾区","徐汇区","长宁区","崇明区"],
        ["荔湾区","越秀区","海珠区","天河区","白云区","黄埔区","增城区","花都区","从化区","番禺区","南沙区"],
        ["福田区","罗湖区","南山区","盐田区","宝安区","龙岗区","光明新区","大鹏新区"],
        ["海沧区","湖里区","集美区","思明区","同安区","翔安区"],
        ["江岸区","江汉区","硚口区","汉阳区","武昌区","洪山区","青山区","东西湖区","蔡甸区","江夏区","黄陂区","新洲区","汉南区"],
        ["瑶海区","庐阳区","蜀山区","包河区"],
        ["中原区","二七区","金水区","惠济区","管城区","上街区"],
        ["碑林区","灞桥区","雁塔区","阎良区","未央区","新城区","长安区","临潼区","高陵区","鄠邑区"],
        ["芙蓉区","天心区","岳麓区","开福区","雨花区","望城区"],
        ["锦江区","青羊区","金牛区","武侯区","成华区","龙泉驿区","青白江区","新都区","温江区","双流区","郫都区"],
        ["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","渝北区","巴南区","涪陵区","綦江区","大足区","长寿区",
        "江津区","合川区","永川区","南川区","璧山区","铜梁区","潼南区","荣昌区","万州区","黔江区","梁平区","开州区"]
    ];
    //header部分选择区域弹窗
    var header_city=$(".header .top .message .city");
    var header_select=$(".header .top .message .selec");
    header_city.attr("data-value",province[0].name);
    var has_area_bg=$("#has-area-bg");
    var has_area=$("#has-area");
    var closeArea=$("#has-area .closeArea");
    //填充大区城市
    init();
    function init(){
        var has_city_ul_1=$("#has-area #has-city .c1");
        var has_city_ul_2=$("#has-area #has-city .c2");
        var has_city_ul_3=$("#has-area #has-city .c3");
        var has_city_ul_4=$("#has-area #has-city .c4");
        var has_city_ul_5=$("#has-area #has-city .c5");
        for(var j=0;j<province[1].detail.length;j++){
            var $temp1=$('<li>'+province[1].detail[j].name+"</li>");
            has_city_ul_1.append($temp1);
        };
        for(var k=0;k<province[2].detail.length;k++){
            var $temp2=$('<li>'+province[2].detail[k].name+"</li>");
            has_city_ul_2.append($temp2);
        };
        for(var l=0;l<province[3].detail.length;l++){
            var $temp3=$('<li>'+province[3].detail[l].name+"</li>");
            has_city_ul_3.append($temp3);
        };
        for(var m=0;m<province[4].detail.length;m++){
            var $temp4=$('<li>'+province[4].detail[m].name+"</li>");
            has_city_ul_4.append($temp4);
        };
        for(var n=0;n<province[5].detail.length;n++){
            var $temp5=$('<li>'+province[5].detail[n].name+"</li>");
            has_city_ul_5.append($temp5);
        };
    };
   //点击切换区域弹窗
    header_select.on("click",function(e){
        has_area_bg.css({"display":"block"}).removeClass("bounceOutUp").addClass("animated bounceInUp");
        has_area.css("display","block").removeClass("bounceOutUp").addClass("animated bounceInUp").css("opacity","1");
    });
    //点击关闭区域弹窗
    closeArea.on("click",function(){
        has_area_bg.removeClass("bounceInUp").addClass("animated bounceOutUp");
        has_area.removeClass("bounceInUp").addClass("animated bounceOutUp").css({"opacity":"0","display":"none"});
    });
    //点击选择城市
    var has_city_li=$("#has-city li");
    has_city_li.each(function(index){
        $(this).on("click",function(){
            var tmp=$(this).text();
            header_city.text(tmp);
            var baoJia_select_area=$("#baojia .BJ-quyu .select-quyu");
            baoJia_select_area.empty();
            for(var i=0;i<newProvince[index].length;i++){
                var $tmp=$('<li>'+newProvince[index][i]+"</li>");
                baoJia_select_area.append($tmp);
            };
            $("#baojia #BJ-area").text(newProvince[index][0]);
            closeArea.trigger("click");
            //报价选择区域
            var s_select=$("#baojia .BJ-quyu .select-quyu li");
            s_select.each(function(index){
                $(this).on("click",function(){
                    var s_text=$(this).text();
                    var s_title_2=$("#baojia #BJ-area");
                    s_title_2.text(s_text);
                    select_ul.slideDown();
                });
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
            console.log(fang);
        }else if(xj_index==1){
            fang="旧房";
            console.log(fang);
        };
    };

    //选择报价区域自定义下拉列表
    var s_title=$("#baojia .BJ-quyu #BJ-area");
    var select_ul=$("#baojia .BJ-quyu .select-quyu");
    //点击下拉列表标题时的样式
    s_title.click(function(e){
        select_ul.css({"height":"180px","overflow-y":"auto","overflow-x":"hidden","z-index":"999999"}).toggle();
        e.stopPropagation();
    });
    var s_select=$("#baojia .BJ-quyu .select-quyu li");
    //选中下拉列表选项的样式
    s_select.each(function(index){
        $(this).on("click",function(){
            var s_text=$(this).text();
            s_title.text(s_text);
            select_ul.slideDown();
        });
    });
    //点击DOM阻止事件冒泡
    $(document).click(function(){
        select_ul.slideUp();
    });


    //所有的都为true时才可以提交
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
        modal_bg.css({"display":"block","z-index":"50"}).removeClass("zoomOutUp").addClass("animated zoomInUp");
        modal.css("display","block").removeClass("zoomOutUp").addClass("animated zoomInUp").css("opacity","1");
    });
    close.on("click",function(){
        modal_bg.removeClass("zoomInUp").addClass("animated zoomOutUp").css({"z-index":"0"});
        modal.removeClass("zoomInUp").addClass("animated zoomOutUp").css({"opacity":"0","display":"none"});
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
            alert('输入不正确！');
            return false;
        }else{
            //阻止默认行为
            return false;
        };
    });

});
