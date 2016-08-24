/**
 * Created by Administrator on 2016/7/26.
 */
$(function(){
    $(window).scroll(function(){

        if( $(this).scrollTop()>500){
            $(".player").show();
        }else{
            $(".player").hide();
        }
    })
});