/**
 * Created by Administrator on 2017/7/18.
 */
$(function(){
    $('#nav li').hover(function(){
        $('span',this).stop().css('height','3px');
        $('span',this).animate({
            left:'0',
            width:'100%',
            right:'0'
        },200);
    },function(){
        $('span',this).stop().animate({
            left:'50%',
            width:'0'
        },200);
    });

});