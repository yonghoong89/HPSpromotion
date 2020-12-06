var urlBase = "http://item.gmarket.co.kr/detailview/Item.asp?goodscode=";

$(document).ready(function(){

	$(".noti").click(function(){
		var popId = $(this).attr("href");
		$(".pop").hide();
		$(popId).show();
		return false;
	});
	$(".btn_close,.btn_close2").click(function(){
		$(this).parent().hide();
		return false;
	});

	// 동영상
	$(".ifrm_movie").attr("src","https://www.youtube.com/embed/dm0PYgb11wo?showinfo=0&amp;amp;rel=0");

	 var swiper1 = new Swiper('.slide01 .slide', {
		pagination: '.pagination1',
		loop:true,
		noSwiping: true,
		paginationClickable: true
	});
	$('.prev1').on('click', function(e){
		e.preventDefault()
		swiper1.swipePrev()
	})
    $('.next1').on('click', function(e){
		e.preventDefault()
		swiper1.swipeNext()
	});

	

});