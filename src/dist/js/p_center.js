$(document).ready(function () {

$(function(){

    // 个人中心--我的订单Tab选项卡-----------------------------------------------------
    $(".all").on("click",function(){
        $(".cen-ord-all").fadeIn(10);
        $(".cen-ord-pay,cen-ord-paid,cen-ord-receipt,cen-ord-evaluate").fadeOut(10);
        $(this).children().eq(2).fadeIn(10);
        $(this).addClass("col000").siblings().removeClass("col000");
        $(this).siblings("li").find(".und-line").fadeOut(10);
        $(".settle").fadeIn(10);
    })
    $(".pay").on("click",function(){
        $(".cen-ord-pay").fadeIn(10);
        $(".cen-ord-all,.cen-ord-paid,.cen-ord-receipt,.cen-ord-evaluate").fadeOut(10);
        $(this).children().eq(2).fadeIn(10);
        $(this).addClass("col000").siblings().removeClass("col000");
        $(this).siblings("li").find(".und-line").fadeOut(10);
        $(".settle").fadeIn(10);
    })
    $(".paid").on("click",function(){
        $(".cen-ord-paid").fadeIn(10);
        $(".cen-ord-all,.cen-ord-pay,.cen-ord-receipt,.cen-ord-evaluate").fadeOut(10);
        $(this).children().eq(2).fadeIn(10);
        $(this).addClass("col000").siblings().removeClass("col000");
        $(this).siblings("li").find(".und-line").fadeOut(10);
        $(".settle").fadeOut(10);
    })
    $(".receipt").on("click",function(){
        $(".cen-ord-receipt").fadeIn(10);
        $(".cen-ord-all,.cen-ord-pay,.cen-ord-paid,.cen-ord-evaluate").fadeOut(10);
        $(this).children().eq(2).fadeIn(10);
        $(this).addClass("col000").siblings().removeClass("col000");
        $(this).siblings("li").find(".und-line").fadeOut(10);
        $(".settle").fadeOut(10);
    })
    $(".evaluate").on("click",function(){
        $(".cen-ord-evaluate").fadeIn(10);
        $(".cen-ord-all,.cen-ord-pay,.cen-ord-paid,.cen-ord-receipt").fadeOut(10);
        $(this).children().eq(2).fadeIn(10);
        $(this).addClass("col000").siblings().removeClass("col000");
        $(this).siblings("li").find(".und-line").fadeOut(10);
        $(".settle").fadeOut(10);
    })


})


//我的账户======================================================================
$(function(){
    $(".zh-con02 li").on("click",function(){
        $(this).addClass("colfed").siblings("li").removeClass("colfed");
    })
})
























})