$(function(){
	// 导航栏下拉菜单
	$("nav li").hover(function(){
		$(this).find("div").find("a").css({
				height:0
			});
		$(this).find("div").stop().slideDown(200);
		$(this).find("div").find("a").animate({
			height:33+"px"
		})

	},function(){
		$(this).find("div").stop().slideUp(300);
	})

});

$(function(){
	// 搜索框
	$("form input").focus(function(){
		$(this).css({
			"background":"#fff",
			"outline":"none"
		});
		$(this).parent().find("div").show();
	});
	$("form input").blur(function(){
		$(this).css({
			"background":"#ccc"
		});
		$(this).parent().find("div").hide();
	});

});

// mv详细信息
$(function(){
	// $(".mv").hover(function(){
	// 	$(".mvinfo").slideDown(1000);
	// 	$(".mvinfo").animate({
	// 		"height":"148px"
	// 	})
	// })
	$(".mv").mouseover(function(){
		$(this).find(".mvinfo").stop().slideDown(400);
	});
	$(".mv").mouseout(function(){
		$(this).find(".mvinfo").stop().slideUp(400);
	});
});

// 显示更多
$(function(){
	$(".pre").hide();
	var j=1;
	$(".next").click(function(){
		j++;
		console.log(j);
		$(this).parent().find(".content").animate({
			"margin-left":-1240+"px"
		});
		// $("#shoubo li").eq(j).siblings().hide();
		$(".pre").show();
	});
	$(".pre").click(function(){
		$(this).parent().find(".content").animate({
			"margin-left":"+="+1240+"px"
		});
		$(".pre").hide();
	})
});

// list菜单切换
$(function(){
	$("#shoubo .content").eq(0).show();
	$("#shoubo .list a").click(function(){
		$(this).addClass("choose").siblings().removeClass("choose");
		var index=$(this).index();
		// $(".list a").removeClass("choose");
		// $("section .content").hide();
		$(this).parent().parent().find(".content").hide();
		$(this).parent().parent().find(".content").eq(7-index-1).show();
		// $("section .content").eq(7-index-1).show();
	});

	// $("#liuxing .content").eq(0).show();
	// $("#liuxing .list a").click(function(){
	// 	$(this).addClass("choose").siblings().removeClass("choose");
	// 	var index=$(this).index();
	// 	console.log(7-index-1);
	// 	$(this).parent().parent().find(".content").hide();
	// 	$(this).parent().parent().find(".content").eq(7-index-1).show();

	// })

	// $("#vbang .content").eq(0).show();
	// $("#vbang .list a").click(function(){
	// 	$(this).addClass("choose").siblings().removeClass("choose");
	// 	var index=$(this).index();
	// 	console.log(7-index-1);
	// 	$(this).parent().parent().find(".content").hide();
	// 	$(this).parent().parent().find(".content").eq(7-index-1).show();

	// })
});

// 获取焦点图高度
$(function(){
	var fheight=$(".focus img").first().outerHeight();
	console.log(fheight);
	console.dir($(".focus img"));
	$(".focus").css({
		height:fheight
	});
	$(".container").css({
		// marginTop:fheight+50+"px"
	});
});


$(function(){
	// 焦点图
	$(".focus_pic li").first().show();
	$(".btn").hide();
	var i=0;

	// 鼠标滑入时切换
	$(".focus_num li").mouseenter(function(){
		$(this).addClass("yes").siblings().removeClass("yes");
		var index=$(this).index();

		i=index;
		console.log(index);
		$(".focus_pic li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	});

	// 自动切换
	var t=setInterval(function(){
		i++;
		if(i==9){
			i=0;
		}
		$(".focus_num li").eq(i).addClass("yes").siblings().removeClass("yes");
		$(".focus_pic li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
	},1600);

	// 鼠标停留时，停止自动切换
	$(".focus").hover(function(){
		$(".btn").show();
		clearInterval(t);
	},function(){
		$(".btn").hide();
		t=setInterval(function(){
			i++;
			if(i==9){
				i=0;
			}
			$(".focus_num li").eq(i).addClass("yes").siblings().removeClass("yes");
			$(".focus_pic li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
		},1600)
	});

	// 下一页
	$(".right").click(function(){
		i++;
			if(i==9){
				i=0;
			}
			$(".focus_num li").eq(i).addClass("yes").siblings().removeClass("yes");
			$(".focus_pic li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
		
	});

	// 上一页
	$(".left").click(function(){
		i--;
			if(i==-1){
				i=8;
			}
			$(".focus_num li").eq(i).addClass("yes").siblings().removeClass("yes");
			$(".focus_pic li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})
});

// 回到顶部
$(function(){
	$(".backtotop").on("click",function(){
		var timer=setInterval(function(){
			var stop=document.body.scrollTop||document.documentElement.scrollTop;
			window.scrollTo(0,stop-20);
			if(stop==0){
			clearInterval(timer);
			}
		})
	})
});