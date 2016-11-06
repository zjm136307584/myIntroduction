$(document).ready(function(){
			$("#fullpage").fullpage({
				verticalCentered:false,
				anchors:["page1","page2","page3","page4","page5","page6"],
				navigation:true,
				navigationTooltips:["我的简历首页","基本信息","技能掌握","工作经历","我的作品","请联系我"],
				afterLoad:function(link,index){
					switch(index){
						case 1:
							$(".section1 .center").css({
								"transform":"rotate(360deg)",
								"transition":"all 1s"
							});	
							$(".section1 .right-mainword").css({
								"right":"0",
								"transition":"all 2s"
							});
							break;
						case 2:
							$(".section2 .spring").css({
								"transform":"rotate(360deg)",
								"transition":"all 1s"
							});
							break;
						case 3:
							$(".section3 .summer").css({
								"transform":"rotate(360deg)",
								"transition":"all 1s"
							});
							break;
						case 4:
							$(".section4 .fall").css({
								"transform":"rotate(360deg)",
								"transition":"all 1s"
							});
							break;
						case 5:
							$(".section5 .winter").css({
								"transform":"rotate(360deg)",
								"transition":"all 1s"
							});
							break;
						case 6:
							$(".section6 .end").css({
								"transform":"rotate(360deg)",
								"transition":"all 1s"
							});
							break;
						default:
							break;
					}
				}
			});
			$(".contactSpite1").click(function(){
				$(".myalert:first").css("display","block");
				$(".mask2").css("display","block");
			});
			$(".contactSpite2").click(function(){
				$(".myalert:eq(1)").css("display","block");
				$(".mask2").css("display","block");
			});
			$(".contactSpite3").click(function(){
				$(".myalert:eq(2)").css("display","block");
				$(".mask2").css("display","block");
			});
			$(".contactSpite4").click(function(){
				$(".myalert:eq(3)").css("display","block");
				$(".mask2").css("display","block");
			});
			$(".contactSpite5").click(function(){
				$(".myalert:eq(4)").css("display","block");
				$(".mask2").css("display","block");
			});
			$(".mask2").click(function(){
				$(".myalert").css("display","none");
				$(".mask2").css("display","none");
			});
		});