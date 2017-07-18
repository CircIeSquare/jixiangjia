/**
 * Created by Administrator on 2017/7/18.
 */
$(function(){
    //向下滚动时
    function toBottom(ele,clsName){
        var winHeight=$(window).height()*0.5;//可视窗口的高度的一半，更改0.5可以调整滚动到底部、中部、顶部时候开始加载
        var winScrollTop=$(window).scrollTop();//文档的滚动高度
        var ele_top=$(ele).offset().top;//内容区元素的top
        var ele_height=$(ele).height();//内容区元素的高
        //判断条件
        /*if(winScrollTop<ele_top-winHeight){
         $(ele).removeClass(clsName);
         }else */if((winScrollTop>ele_top-winHeight)&&(winScrollTop<ele_top+ele_height)){
            $(ele).addClass(clsName);
        }/*else{
         $(ele).removeClass(clsName);
         }*/
    }

    //获取前一次的滚动高度（这里是第一次）
    var firstTop=$(window).scrollTop();
    $(window,document).on("scroll",function(){
        //每次滚动重新获取滚动高度
        var lastTop=$(this).scrollTop();
        //后一次滚动高度大于前一次滚动高，说明向下滚动，否则向上滚动！
        if(lastTop>firstTop){
            //加载对应的内容区域

            //家居
            toBottom(".jiaju .inner .text","animated fadeInLeft");
            toBottom(".jiaju .inner .pic","animated fadeInRight");
            //方案
            toBottom(".fangan .inner .page-title","animated fadeInUp pt-page-delay100");
            toBottom(".fangan .inner .picText li:eq(0)","animated fadeInLeft pt-page-delay300");
            toBottom(".fangan .inner .picText li:eq(1)","animated fadeInLeft pt-page-delay500");
            toBottom(".fangan .inner .picText li:eq(2)","animated fadeInLeft pt-page-delay700");
            toBottom(".fangan .inner .picText li:eq(3)","animated fadeInLeft pt-page-delay900");
            //专享
            toBottom(".zhuanxiang .wraper","animated fadeInUp");
            toBottom(".zhuanxiang a","animated fadeInUp pt-page-delay100");
            //报价
            //toBottom(".baojia","animated fadeInUp pt-page-delay300");
            toBottom(".baojia .inner .txt","animated fadeInUp pt-page-delay100");
            toBottom(".baojia .inner .cont","animated fadeInUp pt-page-delay300");
            toBottom(".baojia .inner .people","animated fadeInUp pt-page-delay500");
            //品牌
            //toBottom(".pingpai","animated fadeInUp pt-page-delay300");
            toBottom(".pingpai .wraper .page-title","animated fadeInUp pt-page-delay100");
            toBottom(".pingpai .wraper .ping","animated fadeInRight pt-page-delay300");
            toBottom(".pingpai .wraper .pai","animated fadeInLeft pt-page-delay300");
            //工艺
            toBottom(".gongyi .wraper .page-title","animated fadeInUp");
            toBottom(".gongyi .wraper .cont .left"," animated fadeInLeft pt-page-delay100");
            toBottom(".gongyi .wraper .cont .right","animated fadeInRight pt-page-delay100");
            //案例
            toBottom(".anli .inner .page-title"," animated fadeInUp");
            toBottom(".anli .inner .cont li:eq(0)"," animated fadeInUp pt-page-delay100");
            toBottom(".anli .inner .cont li:eq(1)","animated fadeInUp pt-page-delay200");
            toBottom(".anli .inner .cont li:eq(2)","animated fadeInUp pt-page-delay300");
            //流程
            toBottom(".liucheng .inner .page-title"," animated fadeInUp");
            toBottom(".liucheng .inner .cont .li:eq(0)"," animated fadeInUp");
            toBottom(".liucheng .inner .cont .li:eq(1)","animated fadeInUp pt-page-delay100");
            toBottom(".liucheng .inner .cont .li:eq(2)","animated fadeInUp pt-page-delay200");
            toBottom(".liucheng .inner .cont .li:eq(3)","animated fadeInUp pt-page-delay300");
            toBottom(".liucheng .inner .cont .li:eq(4)","animated fadeInUp pt-page-delay400");

        }/*else{
         //toUp('.banner');
         //toUp('.con');
         }*/
        //每次都将后一次的滚动高度赋值给前一次的滚动高度
        firstTop=lastTop;
    });

});