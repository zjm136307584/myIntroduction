
// 实现首页焦点轮播
$(document).ready(
		function(){
			start();
		}
	);
		function start(){
			var photoLi=$("#photo li");
			var num=0;
			var time=setInterval(function(){
				$("#photo li").eq(num).fadeOut(1500);
				$("#buttom li").eq(num).removeClass("target");		
				if(num>=photoLi.length-1){
					num=0;
				}
				else{
					num++;
				}
				$("#photo li").eq(num).fadeIn(1500);
				$("#buttom li").eq(num).addClass("target");
			},4000);
			
			$("#buttom li").each(function(){
				$(this).click(function(){
					$("#photo li").eq(num).fadeOut(1500);
					$("#buttom li").eq(num).removeClass("target");
					num=$("#buttom li").index($(this));
					$("#photo li").eq(num).fadeIn(1500);
					$("#buttom li").eq(num).addClass("target");
				});
		});
		};
