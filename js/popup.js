/**
 * Created by Administrator on 2017/5/20.
 */
$(function(){

    //表单部分的结构
    var formtContent='<div id='+"formt"+' class='+"clearfix"+'>'
        +'<div class='+"jisuanqibanner"+'>'+'<img class='+"CalculatorLOGO"+' src='+"images/img/calculatorLOGO1.png"+'>'
        +'<span>装修计算器</span>'+'<small>已有8888位业主获取了装修预算</small>'
        +'<input class='+"jisuanqireset"+' type='+"reset"+' value='+"重新计算"+'></div>'
        +'<div class='+"jisuanqibiaodan"+'><div class='+"zuoinput"+'>'+'<span>'
        +'<small>所在区域：</small>'+'<div id='+"quyu"+'>'+'<small>ˇ</small>'+'<i>武汉</i>'
        +'<ul>' +'<li data-value='+"武汉"+'>武汉</li>'
        +'<li data-value='+"长沙"+'>长沙</li>'
        +'<li data-value='+"郑州"+'>郑州</li>'
        +'<li data-value='+"西安"+'>西安</li>'
        +'<li data-value='+"合肥"+'>合肥</li>'
        +'</ul></div>'
        +'</select>'+'</span>'+'<span>'
        +'<small>房屋面积：</small><input type='+"text"+' name='+"mianji"+' id='+"mianji4"+' maxlength='+"4"+' placeholder='+"填写您的房屋面积(例如:100)"+'>'
        +'</span>'+'<span>'+'<small>您的名字：</small><input type='+"text"+' name='+"name"+' id='+"name4"+' maxlength='+"6"+' placeholder='+"填写您的名字"+'>'
        +'</span>'+'<span>'+'<small>您的手机：</small><input type='+"text"+' name='+"phone"+' id='+"phone4"+' maxlength='+"11"+' placeholder='+"填写号码获取预算"+'>'
        +'</span>'+'</div>'
        +'<div class='+"zhonganniu"+'>'+'<a class='+"a_post"+'>开始计算</a>'+'</div>'
        +'<div class='+"youjieguo"+'>'
        +'<p>预算施工约<input type='+"text"+' placeholder='+"?"+' class='+"yusuan"+' disabled>万元全部预算约<input type='+"text"+' placeholder='+"?"+' class='+"QByusuan"+' disabled>万元</p>'
        +'<p class='+"clearfix"+'><span class='+"zi"+'>卧室</span><small></small><span class='+"ws"+'>？</span><span class='+"y"+'>元</span></p>'
        +'<p class='+"clearfix"+'><span class='+"zi"+'>客厅</span><small></small><span class='+"kt"+'>？</span><span class='+"y"+'>元</span></p>'
        +'<p class='+"clearfix"+'><span class='+"zi"+'>厨房</span><small></small><span class='+"cff"+'>？</span><span class='+"y"+'>元</span></p>'
        +'<p class='+"clearfix"+'><span class='+"zi"+'>厕所</span><small></small><span class='+"cs"+'>？</span><span class='+"y"+'>元</span></p>'
        +'<p class='+"clearfix"+'><span class='+"zi"+'>阳台</span><small></small><span class='+"yt"+'>？</span><span class='+"y"+'>元</span></p>'
        +'<p class='+"clearfix"+'><span class='+"zi"+'>其他</span><small></small><span class='+"qt"+'>？</span><span class='+"y"+'>元</span></p>'
        +'</div>'
        +'</div>'
        +'</div>';

    /*-----------------------------------------*/
    //所有的都为true时才可以提交
    var fname=false,fphone=false,fmianji=false;
    //全国每平米装修价格为588元
    //var QG=588;
    //武汉每平米装修价格为578元
    //var WH=578;
    //长沙每平米装修价格为568元
    //var CS=568;
    //广州每平米装修价格为558元
    //var GZ=558;

    //单价588每平米，不区分区域，全国统一价
    var dj=588;


    var timer=setTimeout(function(){
        $(".jisuanqi .JSQtitle .goTop").trigger("click");
    },10000);
    //点击按钮显示表单
    $(".jisuanqi .JSQtitle .goTop").on("click",function(){
        $(this).css("display","none");
        $(".jisuanqi .JSQtitle .goBot").css("display","block");

        var formt=$(".jisuanqi #form #formt")[0];
        if(formt==undefined){
            $(".jisuanqi #form").append(formtContent).slideDown(800,"swing");

            //自定义的选择区域下拉列表
            var s_title=$("#quyu i");
            var s_select=$("#quyu ul li");
            //点击下拉列表标题时的样式
            s_title.click(function(e){
                $(this).addClass("i_active");
                $(this).next("ul").show();
                e.stopPropagation();
            });
            //选中下拉列表选项的样式
            s_select.click(function(){
                var s_text=$(this).html();
                var s_title_2=$(this).parent('ul').prev("i");
                s_title_2.html(s_text).removeClass("i_active");
                $(this).parent('ul').hide();
            });
            //点击DOM阻止事件冒泡
            $(document).click(function(){
                s_title.removeClass("i_active");
                $("#quyu ul").hide();
            });

            var alertMianji="[面积输入错误]";
            var alertNames="[姓名输入错误]";
            var alertPhone="[手机号码非法]";
            //面积不能为空
            $('#mianji4').on("blur",function(){
                var mianji=$(this).val();
                mianjis = mianji.replace(/[^0-9]/ig,"");
                if(/^[1-9]\d*$/.test(mianji)){
                    fmianji = true;
                }else{
                    return false;
                };
            });
            //姓名不能为空
            $('#name4').on("blur",function(){
                if($(this).val()){
                    fname = true;
                }else{
                    return false;
                };
            });
            //手机号不能为空
            $("#phone4").on("blur",function(){
                var phone4=$(this).val();
                if(/^1[3578]\d{9}$/.test(phone4)){
                    fphone = true;
                }else{
                    return false;
                };
            });

            //给表单绑定提交事件
            $('.a_post').click(function(){
                if(fname && fmianji && fphone){
                    //重新设置右侧表单内元素的宽度
                    var clientWidth=$(window).width();
                    var BD=$("#formt .jisuanqibiaodan .youjieguo p small");
                    if(clientWidth<=1920){
                        BD.css("width","58%");
                        $("#formt .jisuanqibiaodan .youjieguo p .y").css("margin-right","3%");
                        if(clientWidth<=1360){
                            BD.css("width","50%");
                            if(clientWidth<=1200){
                                BD.css("width","45%");
                            };
                        };
                    };

                    //当名称、面积、手机号都不为空时候，
                    //先判断选择的区域，进行分类计算，最后输出到右边的区域
                    quyu=$("#quyu i").text();
                    mianjis=$("#mianji4").val();
                    name=$("#name4").val();
                    phone=$("#phone4").val();

                    var yusuan=$(".youjieguo .yusuan");
                    var QByusuan=$(".youjieguo .QByusuan");
                    /*if(quyu=="全国"){
                        yusuan.val((QG*parseFloat(mianjis)/10000).toFixed(2));
                        if(yusuan.val()!=0){
                            QByusuan.val((parseFloat(yusuan.val())+5).toFixed(2));
                        };
                    }else if(quyu=="武汉"){
                        yusuan.val((WH*parseFloat(mianjis)/10000).toFixed(2));
                        if(yusuan.val()!=0){
                            QByusuan.val((parseFloat(yusuan.val())+5).toFixed(2));
                        };
                    }else if(quyu=="长沙"){
                        yusuan.val((CS*parseFloat(mianjis)/10000).toFixed(2));
                        if(yusuan.val()!=0){
                            QByusuan.val((parseFloat(yusuan.val())+5).toFixed(2));
                        };
                    }else if(quyu=="广州"){
                        yusuan.val((GZ*parseFloat(mianjis)/10000).toFixed(2));
                        if(yusuan.val()!=0){
                            QByusuan.val((parseFloat(yusuan.val())+5).toFixed(2));
                        };
                    };*/
                    yusuan.val((dj*parseFloat(mianjis)/10000).toFixed(2));
                    if(yusuan.val()!=0){
                        QByusuan.val((parseFloat(yusuan.val())+5).toFixed(2));
                    };

                    $(".youjieguo .ws").text(parseFloat(QByusuan.val()*10000*0.2).toFixed(2));
                    $(".youjieguo .kt").text(parseFloat(QByusuan.val()*10000*0.2).toFixed(2));
                    $(".youjieguo .cff").text(parseFloat(QByusuan.val()*10000*0.2).toFixed(2));
                    $(".youjieguo .cs").text(parseFloat(QByusuan.val()*10000*0.2).toFixed(2));
                    $(".youjieguo .yt").text(parseFloat(QByusuan.val()*10000*0.1).toFixed(2));
                    $(".youjieguo .qt").text(parseFloat(QByusuan.val()*10000*0.1).toFixed(2));

                    //表单跳走
                    // $('#formt').submit();
                    // return true;
                    tsou();

                }else if(fmianji==false || fname==false || fphone==false){
                    alert('输入不合法！');
                    //面积错误
                //     return false;
                // }else if(fmianji==true && fname==false && fphone==true){
                //     alert(alertNames);
                //     //姓名错误
                //     return false;
                // }else if(fmianji==true && fname==true && fphone==false){
                //     alert(alertPhone);
                //     //号码错误
                //     return false;
                // }else if(fmianji==false && fname==false && fphone==true){
                //     alert(alertMianji+alertNames);
                //     //面积错误、姓名错误
                //     return false;
                // }else if(fmianji==false && fname==true && fphone==false){
                //     alert(alertMianji+alertPhone);
                //     //面积错误、号码错误
                //     return false;
                // }else if(fmianji==true && fname==false && fphone==false){
                //     alert(alertNames+alertPhone);
                //     //姓名错误、号码错误
                //     return false;
                // }else if(fmianji==false && fname==false && fphone==false){
                    // alert(alertMianji+alertNames+alertPhone);
                    //面积错误、姓名错误、号码错误
                    return false;
                }else{
                    //阻止默认行为
                    return false;
                };
            });
        }else{
            return false;
        };
    });
    
    // ajax发送搜索 
    function tsou(){
        $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
            type:'POST',
            url: '/home/suan',
            data:{name:name,mianji:mianjis,phone:phone,quyu:quyu},
            dataType:'json',
            traditional: true,
        });
    }


    //点击按钮隐藏表单
    $(".jisuanqi .JSQtitle .goBot").on("click",function(){
        clearTimeout(timer);

        $(this).css("display","none");
        $(".jisuanqi .JSQtitle .goTop").css("display","block");

        var formt=$(".jisuanqi #form #formt")[0];
        if(formt!==undefined){
            $(".jisuanqi #form").slideUp(800,"swing",function(){
                //$(".jisuanqi #form").html("");
                $(".jisuanqi #formt").remove();
            });
        }else{
            return false;
        };
    });

});