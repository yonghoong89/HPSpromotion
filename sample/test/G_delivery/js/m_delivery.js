$(document).ready(function() {
	var name="pcid", start, end, pcid = "", isAndroidApp;
	if (document.cookie.length > 0) {
		start = document.cookie.indexOf(name + "=");
		if (start != -1) {
			start = start + name.length + 1;
			end = document.cookie.indexOf(";", start);
			if (end == -1) end = document.cookie.length;

			pcid = unescape(document.cookie.substring(start, end));
		}
	}
	isAndroidApp = (pcid.substr(0, 1) == "3");
	
	/* ios Version Check */
	var ua = navigator.userAgent.toLowerCase();          
	var iosIndex = ua.indexOf('ios');
	var isIphoneApp = (iosIndex != -1);
	var versionStartIndex, versionEndIndex;
	var iosVersion = -1;
	
	if(isAndroidApp || isIphoneApp){
		  $("#pm_wrap").addClass("app");
	}

	// spot 움직임
	$(window).scroll(function(){
        var topScroll = $(window).scrollTop();
		 if(topScroll>$('.top').height()){  
            $(".top .blank").css('display','none');
			
        }else if(topScroll<$('.top').height()){
            $(".top .blank").css('display','block');
        }
		/*if ($(window).scrollTop() >= $(".sec5").offset().top) {
			$(".blank").css({"background":"none"});
		}else if( $(window).scrollTop() <= $(".sec5").offset().top){
			$(".blank").css("background" , "url(http://image.gmarket.co.kr/Gmkt_Event/2018/06/0615_G_delivery/m/top_bg.jpg) no-repeat 50% 0");
			$(".blank").css("background-size" , "100% auto");
		}else if( $(window).scrollTop() <= $(".top").offset().top){
			$(".top").css("background" , "#f8f3ea");
		}*/
    });

	$(".noti").click(function(){
		var popId = $(this).attr("href");
		$(".pop").hide();
		$(popId).show();
		$(this).parent().prepend("<div class='dim'></div>");
		$(".dim").css("display","block");
		return false;
	});
	$(".btn_close, .btn_close2").click(function(){
		$(this).parent().hide();
		$(".dim").remove();
		return false;
	});
	
	// 동영상
	$(".ifrm_movie").attr("src","https://www.youtube.com/embed/dm0PYgb11wo?showinfo=0&amp;amp;rel=0");


	var swiper1 = new Swiper('.slide01', {
		pagination: '.pagination1',
		//autoplay: 5000,
		//autoplayDisableOnInteraction: false,
        paginationClickable: true,
		loop:true,   
		nextButton: '.next1',
        prevButton: '.prev1'
    });

	var swiper2 = new Swiper('.slide02', {
		loop: false,
		slidesPerView: 'auto'	
    });

	// textarea 줄바꿈 제한
    /*$(".txt_msg").keydown(function(){
        var rows = $(".txt_msg").val().split("\n").length;
        var maxRows = 3;
        if( rows > maxRows){
            alert("3줄 까지만 가능합니다");
            modifiedText = $(".txt_msg").val().split("\n").slice(0, maxRows);
            $(".txt_msg").val(modifiedText.join("\n"));
		}
	});*/

});
