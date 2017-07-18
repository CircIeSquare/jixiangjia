/*
*/
(function(a){
    a.fn.vTicker=function(b){

        //默认参数
        //speed:li移动到消失的时间
        //pause:间隔多长时间开始移动ul,一般设置为speed乘以showItem
        //showItem:显示的li的个数
        //animation:动画的样式，默认为fade
        //mousePause:鼠标移入是否停止移动，true停止，false不停止
        //isPause:是否不移动
        //direction:移动的方向，可设置up向上，down向下
        //height:设置ul父级盒的高度

        var c={speed:700,pause:4000,showItems:3,animation:"fade",mousePause:true,isPaused:false,direction:"up",height:0};
        //传入实参与默认参数进行合并得到实际参数
        var b=a.extend(c,b);

        moveUp=function(g,d,e){
            if(e.isPaused){
                return
            }
            var f=g.children("ul");
            var h=f.children("li:first").clone(true);
            if(e.height>0){
                d=f.children("li:first").height()
            }
            f.animate({top:"-="+d+"px"},e.speed,function(){
                a(this).children("li:first").remove();
                a(this).css("top","0px");
            });
            if(e.animation=="fade"){
                f.children("li:first").fadeOut(e.speed);
                if(e.height==0){
                    f.children("li:eq("+e.showItems+")").hide().fadeIn(e.speed)
                }
            }
            h.appendTo(f);
        };
        moveDown=function(g,d,e){
            if(e.isPaused){return}
            var f=g.children("ul");
            var h=f.children("li:last").clone(true);
            if(e.height>0){
                d=f.children("li:first").height()
            }
            f.css("top","-"+d+"px").prepend(h);
            f.animate({top:0},e.speed,function(){
                a(this).children("li:last").remove()
            });
            if(e.animation=="fade"){
                if(e.height==0){
                    f.children("li:eq("+e.showItems+")").fadeOut(e.speed)
                }
                f.children("li:first").hide().fadeIn(e.speed);
            }
        };

        return this.each(function(){

            //缓存ul父级盒子
            var f=a(this);
            var e=0;
            //设置ul父级盒子和ul的样式
            f.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:0,padding:0});
            //判断实际参数height是否为零
            //重置ul父级盒子的height
            if(b.height==0){
                f.children("ul").children("li").each(function(){
                    if(a(this).height()>e){e=a(this).height()}
                });
                f.children("ul").children("li").each(function(){
                    a(this).height(e)
                });
                f.height(e*b.showItems)
            }else{
                f.height(b.height)
            };
            //设置定时器
            var d=setInterval(function(){
                if(b.direction=="up"){
                    moveUp(f,e,b)
                }else{
                    moveDown(f,e,b)
                }
            },b.pause);

            if(b.mousePause){
                f.bind("mouseenter",function(){
                    b.isPaused=true;
                }).bind("mouseleave",function(){
                    b.isPaused=false;
                });
            };
        });
    };
})(jQuery);

