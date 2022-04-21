$(function(){
    $(".nav> li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".nav> li").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });
});
