window.onload = function(){

	getImgLocation();

}

function getImgLocation(){
	var width = document.documentElement.clientWidth;
	var container = document.getElementById("container");
	var boxs = getChildElement();
	var box_width = boxs[0].offsetWidth;
	var num = Math.floor(width/box_width);
	console.log(num);
	//container.style.width = num * box_width + "px";
	//container.style.margin = "0 auto";
	container.style.cssText = "width:"+num*box_width+"px;margin:0 auto;margin-top:84px;";

	var boxHeightArr = [];
	for(var i=0;i<boxs.length;i++){
		if(i<num){
			boxHeightArr.push(boxs[i].offsetHeight);
		}else{
			var min_height = Math.min.apply(null,boxHeightArr);
			console.log(min_height);
			var minIndex = getMinHeightImgLocation(min_height,boxHeightArr);
			boxs[i].style.position = "absolute";
			boxs[i].style.top = min_height+10 + "px";
			boxs[i].style.left = boxs[minIndex].offsetLeft +"px";
			boxHeightArr[minIndex] += boxs[i].offsetHeight+10;
		}
	}
	console.dir(boxHeightArr);
}

function getChildElement(){
	var container = document.getElementById("container");
	var boxs = container.getElementsByClassName("box");
	return boxs;
}

function getMinHeightImgLocation(minHeight,boxHeightArr){
	for(var i=0;i<boxHeightArr.length;i++){
		if(minHeight==boxHeightArr[i]){
			return i;
		}
	}
}










