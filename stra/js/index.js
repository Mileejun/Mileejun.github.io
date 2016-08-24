"use stricpt"
window.onload=function(){
	var header=document.getElementsByTagName('header');
	var has=header[0].getElementsByTagName("a");
	for(var i=0;i<has.length;i++){
		has[i].onmouseover=function(){
			// header[0].style.opacity=0.8; 
			// header[0].style.backgroundColor="black";
			// header[0].cssText="";
		}
	}

}