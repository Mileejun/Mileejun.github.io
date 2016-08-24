/**
 * Created by admin on 2016/8/23.
 */
$(function(){
    $(".welcome").show();
    $(".index").hide();
    $(".wel").hover(function(){
        $(".welcome img").addClass("blur");
    },function(){
        $(".welcome img").removeClass("blur");
    });
    $(".wel").click(function(){
        $(".welcome").animate({height:0});
        $(".index").show();
    })
});