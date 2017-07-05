/**
 * Created by Administrator on 2017/7/1.
 */
window.onload=function(){

    //banner轮播图
    bannerChange();
    function bannerChange(){

        var banner=document.getElementById('bannerIE');
        //slide(banner);
        //function slide(obj){
        //var ol=banner.getElementsByTagName('ol');
        var ol=document.getElementById("banner-ol");
        //获取包含图片的ul盒子
        //var oUl=banner.getElementsByTagName('ul');
        var oUl=document.getElementById("banner-ul");

        //清除空白节点
        //获取ul下所有的li
        //tools.cleanSpace(oUl);
        var aLi=oUl.children;
        //var aLi=tools.getElementsByClassName("li","banner-ul","li");

        //前后按钮
        var preBtn=document.getElementById('preBtn');
        var nextBtn=document.getElementById('nextBtn');
        //计数器
        var n=0;
        var timer=null;
        //根据ul中图片的数量往ol中插入li数字按钮
        for(var i=0;i<aLi.length;i++){
            var li=document.createElement('li');
            li.innerHTML=i+1;
            ol.appendChild(li);
        };
        //var inTmp=oUl.innerHTML;
        //oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;

        //获取ol下的数字按钮
        //var aBtn=banner.getElementsByTagName('ol')[0].children;
        var aBtn=ol.children;
        aBtn[0].className='ac';

        var window_w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        //alert(window_w);
        var liW=tools.getElementsByClassName("li","banner-ul","li")[0].offsetWidth;
        //alert(liW);
        //给ul设置宽度，让li横排；
        var li_w=tools.getStyle(aLi[0],'width');//getStyle方法，在兼容情况下，获取样式表中的li的宽度
        //alert(li_w);
        oUl.style.width=li_w*aLi.length+'px';
        //oUl.style.width=liW*aLi.length+'px';

        for(var i=0;i<aBtn.length;i++){
            aBtn[i].index=i;
            //数字按钮
            aBtn[i].onclick=function(){
                clearInterval(timer);
                tools.animate(oUl,{"left":-this.index*li_w},1500);//按钮点击时，让ul往左移动的距离为当前li按钮的下标乘以li的宽度
                //tools.animate(oUl,{"left":-this.index*window_w},2000);//按钮点击时，让ul往左移动的距离为当前li按钮的下标乘以li的宽度
                n=this.index;									//当点击后，记录下当前按钮点击的下标
                changeBtn(n);
            };
        };
        //更改按钮样式
        function changeBtn(){
            for(var j=0;j<aBtn.length;j++){
                aBtn[j].className='';
            };
            aBtn[n].className='ac';
        };
        //点击更换banner图片
        preBtn.onclick=function(){
            n--;
            //if(n<0) n=0;
            if(n<0) n=aLi.length-1;
            //tools.animate(oUl,{"left":-n*li_w},1500);
            tools.animate(oUl,{"left":-n*window_w},1500);
            changeBtn(n);
        };
        nextBtn.onclick=function(){
            n++;
            //if(n>=aLi.length-1) n=aLi.length-1;
            if(n>=aLi.length) n=0;
            tools.animate(oUl,{"left":-n*li_w},1500);
            //tools.animate(oUl,{"left":-n*window_w},2000);
            changeBtn(n);
        };

        function timerRun(){
            timer=setInterval(function(){
                changeBtn(n);
                tools.animate(oUl,{"left":-n*li_w},1500);
                //tools.animate(oUl,{"left":-n*window_w},2000);
                n++;
                if(n>=aLi.length) n=0;
            },3000);
        };
        timerRun();
        //鼠标移入移出banner图区
        banner.onmouseover=function(){
            clearInterval(timer);
        };
        banner.onmouseout=function(){
            timerRun();
        };
        //};
    };

};