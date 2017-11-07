$(document).ready(function () {

$(function(){

    // 收藏页编辑-----------------------------------------------------
    $(".coll-bj").on("click",function(){
        $(this).fadeOut(300);
        $(this).siblings(".coll-settle").fadeIn(300);
        $(this).siblings(".content").find(".check-coll").fadeIn(300);
    })
    $(".check-coll").on("click",function(){
        if($(this).is(".hd")){
            $(this).addClass("check-true15-a").removeClass("hd");
        }else{
            $(this).removeClass("check-true15-a").addClass("hd");
        }


        //点击选择按钮效果
        if($(this).parents(".content").find(".check-true15-a").length==$(this).parents(".content").find(".check-coll").length){
            $(this).parents(".content").find(".check-true15-a").each(function () {
                $(this).parents(".content").siblings(".coll-settle").find(".coll-check-all").addClass("check-true15-a").removeClass("hd");
            }) 
        }else{
            $(this).parents(".content").siblings(".coll-settle").find(".coll-check-all").removeClass("check-true15-a").addClass("hd");
        }
        
    })
    //点击全选择按钮效果
    $(".coll-check-all").on("click",function(){
        if($(this).is(".hd")){
            $(this).addClass("check-true15-a").removeClass("hd");
            $(this).parent().siblings(".content").find(".check-coll").addClass("check-true15-a").removeClass("hd");
        }else{
            $(this).removeClass("check-true15-a").addClass("hd");
            $(this).parent().siblings(".content").find(".check-coll").removeClass("check-true15-a").addClass("hd");
        }
        
    })


 


})

























})