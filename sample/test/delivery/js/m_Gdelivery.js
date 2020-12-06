$(document).ready(function(){

    $('.button__content-notice').on('click', function(e){
        e.preventDefault();
        $(this).next().toggle();

        $('.button__close-layer').on('click', function(e){
            e.preventDefault();
            $(this).parent().hide();
        });
    });

    $(".button__content-notice").click(function(){
		var popId = $(this).attr("href");
		$(".box__event-layer").hide();
		$(popId).show();
		$(this).parent().prepend("<div class='dim'></div>");
		return false;
	});
    
	$(".button__close-layer, .js-button__close-layer").click(function(){
		$(this).parent().hide();
		$(".box__layer").hide();
		$('.dim').remove();
		return false;
	});


	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop:true,        
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

	/* 스탬프 팝업 */
	var layer_coupon = function(){ 
		$('.js__stamp-active').click(function(){
			var layer = '.' + $(this).find('>a').attr('id');
			$('body').prepend("<div class='dim'></div>");
			$(layer).show();
			return false;
		});
	}
	layer_coupon();


});
