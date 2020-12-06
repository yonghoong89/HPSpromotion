$(document).ready(function(){

	/* Android Version Check */
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

	/* Root */
	var myroot = $('.section__gmarketstation');
	if(isAndroidApp || isIphoneApp){
		if (navigator.userAgent.match('CriOS')) { myroot.addClass("web_view"); } 
		else { myroot.addClass("app_view"); }
	} else { myroot.addClass("web_view");	}

	/* modu */
	$('.list-item-modu .link__detail').click(function(){
		var winOffsetTop = $(window).scrollTop();
		var targetOffset = $(this).parents('.list-item-modu .box__link--detail').offset();
		var scrollTop = $(window).scrollTop()
		
		$('.js__station-modu').css({
			'top' : targetOffset.top - winOffsetTop,
			'left' : targetOffset.left + 78,
			'width' : $(this).width() - 78,
			'height' : $(this).height()
		});

		$('.list-item-modu .box__link--detail').addClass('box__link--detail--active');

		setTimeout(function() {
			$('.js__station-modu').addClass('active');
		},400);
		return false;
	})

	/* class101 */
	$('.list-item-class101 .link__detail').click(function(){
		var winOffsetTop = $(window).scrollTop();
		var targetOffset = $(this).parents('.list-item-class101 .box__link--detail').offset();
		var scrollTop = $(window).scrollTop()
		
		$('.js__station-class101').css({
			'top' : targetOffset.top - winOffsetTop,
			'left' : targetOffset.left + 78,
			'width' : $(this).width() - 78,
			'height' : $(this).height()
		});

		$('.list-item-class101 .box__link--detail').addClass('box__link--detail--active');

		setTimeout(function() {
			$('.js__station-class101').addClass('active');
		},400);
		return false;
	})

	/* netmarble */
	$('.list-item-netmarble .link__detail').click(function(){
		var winOffsetTop = $(window).scrollTop();
		var targetOffset = $(this).parents('.list-item-netmarble .box__link--detail').offset();
		var scrollTop = $(window).scrollTop()
		
		$('.js__station-netmarble').css({
			'top' : targetOffset.top - winOffsetTop,
			'left' : targetOffset.left + 78,
			'width' : $(this).width() - 78,
			'height' : $(this).height()
		});

		$('.list-item-netmarble .box__link--detail').addClass('box__link--detail--active');

		setTimeout(function() {
			$('.js__station-netmarble').addClass('active');
		},400);
		return false;
	})

	
	/* kickgoing */
	$('.list-item-kickgoing .link__detail').click(function(){
		var winOffsetTop = $(window).scrollTop();
		var targetOffset = $(this).parents('.list-item-kickgoing .box__link--detail').offset();
		var scrollTop = $(window).scrollTop()
		
		$('.js__station-kickgoing').css({
			'top' : targetOffset.top - winOffsetTop,
			'left' : targetOffset.left + 78,
			'width' : $(this).width() - 78,
			'height' : $(this).height()
		});

		$('.list-item-kickgoing .box__link--detail').addClass('box__link--detail--active');

		setTimeout(function() {
			$('.js__station-kickgoing').addClass('active');
		},400);
		return false;
	})


	$('.box__station-detail .button__close').click(function(){
		setTimeout(function() {
			$('.box__station-detail').removeClass('active');
		},180);

		$('.box__link--detail').removeClass('box__link--detail--active');
		return false;
	});

	$('.box__station-detail').on('scroll', function(){
		if($(this).scrollTop() > 1){
			$('.button__detail-benefit').addClass('button__detail-benefit--active');
		}else{
			$('.button__detail-benefit').removeClass('button__detail-benefit--active');
		}
	});

	$('.list-item-modu .button__benefit, .js__station-modu .button__detail-benefit').on('click',function(){
		var TodayDate = new Date();
		if(TodayDate < new Date(2019, 8, 11, 10, 0, 0)) {				
			alert('9월 11일 오전 10시 오픈됩니다');
			return false;
		}else{
			location.href = 'http://mitem.gmarket.co.kr/Item?goodscode=1667963439';
		}
		return false;
	});

	$('.list-item-class101 .button__benefit, .js__station-class101 .button__detail-benefit').on('click',function(){
		location.href = 'http://mitem.gmarket.co.kr/Item?goodscode=1663699509';
		return false;
	});

	$('.list-item-netmarble .button__benefit, .js__station-netmarble .button__detail-benefit').on('click',function(){
		location.href = 'http://mitem.gmarket.co.kr/Item?goodscode=1655671654';
		return false;
	});

	$('.list-item-kickgoing .button__benefit, .js__station-kickgoing .button__detail-benefit').on('click',function(){
		location.href = 'http://mitem.gmarket.co.kr/Item?goodscode=1660116228';
		return false;
	});
});

