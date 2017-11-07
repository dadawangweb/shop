$(document).ready(function () {

$(function(){

    // 单个商品点击选择与取消，以及此商品下所有颜色全选-----------------------------------------------------
    $(".check-good").on("click",function(){
        if($(this).is(".check-true15")){
            $(this).removeClass("check-true15");
        }else{
            $(this).addClass("check-true15");
            $(this).parent().siblings().find(".check-goodnumb").addClass("check-true15-a");
            $(".set-btn").addClass("set-btnred").removeClass("disabled");
        }
        
        //点击商品  小计数量变化
        if($(this).parent().siblings().find(".check-true15-a").length>0){
            var suj=0;
            var sul=0;
            var sl=0;
            $(this).parent().siblings().find(".check-true15-a").each(function () {
                sl=($(this).siblings().find(".number-good").text())*1;
                sj=($(this).siblings().find(".unit-total-price").text())*1;
                sul+=sl;
                suj+=sj;
                $(this).parent().siblings().find(".sp-total").text(sul);
                $(this).parent().siblings().find(".total").text(suj);
            }) 
        }else{
            $(this).parent().siblings().find(".sp-total").text(0);
        }


        //点击商品  小计价格以及总价变化
        if($("html").length>0){
            var suj=0;
            var sul=0;
            var suz=0;
            var sl=0;

            $('html').each(function () {
                for(var i=0;i<=$(".total").length;i++){
                    sz=($(".total").eq(i).text())*1;
                    suz+=sz;
                }
                $(".total-all").text(suz);
            }) 
        }else{
            $(".total-all").text(0);
        }
          
    })


    // 单个商品下颜色的选择与取消---------------------------------------------------------------------------
    $(".check-goodnumb").on("click",function(){
        if($(this).is(".check-true15-a")){
            $(this).removeClass("check-true15-a");
            $(this).parents("ul").siblings().find(".check-good").removeClass("check-true15");
        }else{
            $(this).addClass("check-true15-a");
            $(".set-btn").addClass("set-btnred").removeClass("disabled");
            if($(this).parent().siblings().find(".check-true15-a").length==$(this).parent().siblings().find(".check-goodnumb").length){
                $(this).parents("ul").siblings().find(".check-good").addClass("check-true15");
            }else {}
        }

        //点击颜色分类商品  小计数量变化
        if($(this).parents("ul").find(".check-true15-a").length>0){
            var suj=0;
            var sul=0;
            var sl=0;
            $(this).parents("ul").find(".check-true15-a").each(function () {
                sl=($(this).siblings().find(".number-good").text())*1;
                sj=($(this).siblings().find(".unit-total-price").text())*1;
                sul+=sl;
                suj+=sj;
                $(this).parent().siblings().find(".sp-total").text(sul);
                $(this).parent().siblings().find(".total").text(suj);
            }) 
        }else{
            $(this).parent().siblings().find(".sp-total").text(0);
            $(this).parent().siblings().find(".total").text(0);
        }

        //点击颜色分类商品  小计价格以及总价变化
        if($("html").length>0){
            var suj=0;
            var sul=0;
            var suz=0;
            var sl=0;

            $('html').each(function () {
                for(var i=0;i<=$(".total").length;i++){
                    sz=($(".total").eq(i).text())*1;
                    // alert(sz)
                    suz+=sz;
                }
                $(".total-all").text(suz);
            }) 
        }else{
            $(".total-all").text(0);
        }
          

    })
    //全选选择与取消----------------------------------------------------------------------------------------
    $(".check-all").on("click",function(){
        if($(this).is(".check-true15")){
            $(this).removeClass("check-true15");
            $(".check-good").removeClass("check-true15");
            $(".check-goodnumb").removeClass("check-true15-a");
        }else{
            $(this).addClass("check-true15");
            $(".check-good").addClass("check-true15");
            $(".check-goodnumb").addClass("check-true15-a");
        }
        if($(".check-true15-a").length<1){
            $(".set-btn").removeClass("set-btnred").addClass("disabled");
        }else{
            $(".set-btn").addClass("set-btnred").removeClass("disabled");
        }

        //点击全选  小计数量变化
        
        for(var i=0;i<=$(".ord-box").length;i++){
        if($(this).parent().siblings().children().find(".check-true15-a").length>0){
            var suj=0;
            var sul=0;
            var suz=0;
            var sl=0;
            $(this).parent().siblings().children().eq(i).find(".check-true15-a").each(function () {
                sl=($(this).siblings().find(".number-good").text())*1;
                sj=($(this).siblings().find(".unit-total-price").text())*1;
                sul+=sl;
                suj+=sj;
                $(this).parent().siblings().find(".sp-total").text(sul);
                $(this).parent().siblings().find(".total").text(suj);
            }) 
        }else{
            $(this).parent().siblings().find(".sp-total").text(0);
            $(this).parent().siblings().find(".total").text(0);
        }
        }

        //点击全选  总价变化
        if($(this).parent().siblings().children().find(".check-true15-a").length>0){
            var suj=0;
            var sul=0;
            var suz=0;
            var sl=0;
            $('html').each(function () {
                for(var i=0;i<=$(".total").length;i++){
                    sz=($(".total").eq(i).text())*1;
                    suz+=sz;
                }
                $(".total-all").text(suz);
            }) 
        }else{
            $(".total-all").text(0);
        }
        
    })


    //支付确定按钮可点击与否变化以及底色变化---------------------------------------------------------------
    $(".check-good,.check-goodnumb").on("click",function(){
        if($(".check-true15-a").length==$(".check-goodnumb").length){
            $(".check-all").addClass("check-true15");
        }else{
            $(".check-all").removeClass("check-true15");
        }
        if($(".check-true15-a").length<1){
            $(".set-btn").removeClass("set-btnred").addClass("disabled");
        }else{}
    })


    //商品数量增加按钮--------------------------------------------------------------------------------------
    $(".number-add").on("click",function() { 
     var spnum = $(this).siblings('.number-good'); 
     spnum.text(parseInt(spnum.text()) + 1); 
     if (spnum.text() <= 1) { 
      spnum.text(1); 
     } 

     if($(this).parents("ul").find(".check-true15-a").length>0){
         var suj=0;
         var sul=0;
         var sl=0;
         $(this).parents("ul").find(".check-true15-a").each(function () {
             sl=($(this).siblings().find(".number-good").text())*1;
             sj=($(this).siblings().find(".unit-total-price").text())*1;
             dj=($(this).parents(".p-txt").siblings().find(".unit-price").text())*1;
             // alert(dj)
             sul+=sl;
             suj+=sj;
             // alert(sj)
             $(this).parent().siblings().find(".sp-total").text(sul);
             $(this).parent().siblings().find(".total").text(suj+dj);
         }) 
     }else{
         $(this).parent().siblings().find(".sp-total").text(0);
         $(this).parent().siblings().find(".total").text(0);
     }

     // if($("html").length>0){
     //     var suj=0;
     //     var sul=0;
     //     var suz=0;
     //     var sl=0;
     //     $('html').each(function () {
     //         for(var i=0;i<=$(".total").length;i++){
     //             sz=($(".total").eq(i).text())*1;
     //             suz+=sz;
     //         }
     //         $(".total-all").text(suz);
     //     }) 
     // }else{
     //     $(".total-all").text(0);
     // }




    })


    
    //商品数量减少按钮--------------------------------------------------------------------------------------
    $(".number-reduce").on("click",function() { 
     var spnum = $(this).siblings('.number-good'); 
     spnum.text(parseInt(spnum.text()) - 1); 
     if (spnum.text() <= 1) { 
      spnum.text(1); 
      // spnum.parents("li").remove(); 
     } 


    })

    //单个颜色商品数量变化==价格小计
    var sum = 0;
    var v = 0;
    var num = 0;
    var znum = 0;
    $.each($(".number-add,.number-reduce"), function () {
        //单个颜色商品价格小计初始
        num=$(this).siblings(".number-good").text()*1;
        v=$(this).parents(".p-txt").siblings(".p-artxt").find(".unit-price").text()*1;
        sum=num*v;
        sum=Math.round(sum*100)/100;
        $(this).parent().siblings(".ck-numa").find(".unit-total-price").text(sum);
        // $(this).parents("li").siblings().find(".sp-total").text(znum);

        $(".number-add,.number-reduce").on("click",function(){
            num=$(this).siblings(".number-good").text()*1;    //颜色商品数量
            v=$(this).parents(".p-txt").siblings(".p-artxt").find(".unit-price").text()*1;//颜色商品数量单价
            sum=num*v;//颜色商品数量小计总价
            sum=Math.round(sum*100)/100;
            $(this).parent().siblings(".ck-numa").find(".unit-total-price").text(sum);
            $(this).parents("li").siblings().find(".sp-total").text();
        })
        ;
    });


})






/*==============================新增地址=默认地址==========================*/

$(function(){
    $(".moren").on("click",function(){
        if($(this).children(".check-default").is(".check-true12-a")){
           $(this).children(".check-default").removeClass("check-true12-a"); 
       }else{
            $(this).children(".check-default").addClass("check-true12-a"); 
       }
        
    })
})

/*==============================选择支付方式==========================*/

$(function(){
    $(".balance").on("click",function(){
        if($(this).children(".check-ck").is(".check-true15-a")){
           $(this).children(".check-ck").removeClass("check-true15-a"); 
           
       }else{
            $(this).children(".check-ck").addClass("check-true15-a"); 
            $(this).siblings().children(".check-ck").removeClass("check-true15-a"); 
       }
        
    })

    $(".sure-pay").on("click",function(){
        if($(".check-ck").is(".check-true15-a")){
            alert("确认支付？")
        }else{
            alert("请选择支付方式！")
        }
    })

})

/*===============================商品详情tab切换==========================*/
$(function(){
    $(".commodity-artic").on("click",function(){
        $(".op1").addClass("opacity1").siblings().removeClass("opacity1");
        $(this).addClass("red").siblings().removeClass("red");
        $(".det-imgs").addClass("show").removeClass("hide");
        $(".det-txts").addClass("hide").removeClass("show");
    })
    $(".commodity-size").on("click",function(){
        $(".op2").addClass("opacity1").siblings().removeClass("opacity1");
        $(this).addClass("red").siblings().removeClass("red");
        $(".det-txts").addClass("show").removeClass("hide");
        $(".det-imgs").addClass("hide").removeClass("show");
    })


    $(".det-04").on("click",function(){
        $(".det-check-bg").fadeIn(300);
        $(".det-foot").fadeOut(300);
    })
    $(".det-close").on("click",function(){
        $(".det-check-bg").fadeOut(300);
        $(".det-foot").fadeIn(300);
    })
})

//=============================邀请开店========================================
$(function(){
    $(".btn-cshare").on("click",function(){
        $(this).parents(".content").siblings(".mengbang").fadeIn(300);
    })
    $(".mengbang").on("click",function(){
        $(this).fadeOut(300);
    })
})




















})