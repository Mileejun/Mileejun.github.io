/**
 * Created by Administrator on 2016/7/28.
 */
window.onload=function(){
    var tel=document.getElementById("tel");
    var btn=document.getElementById("btn");
    var error=document.getElementById("error");
    var reg=/^1[3|4|5|7|8]\d{9}$/;
    tel.onblur=function(){
        if(tel.value==""){
            error.style.display="block";
            error.innerText="手机号码不能为空";
        }else if(!(reg.test(tel.value))){
            error.style.display="block";
            error.innerText="手机号码格式不正确";
        }else{
            error.style.display="none";
        }
    }
};