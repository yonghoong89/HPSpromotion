$(document).ready(function(){
	
	$('.button__notice, .button__apply').on('click', function(e){
        e.preventDefault();
        $(this).next().toggle();

        $('.button__close-layer').on('click', function(e){
            e.preventDefault();
            $(this).parent().hide();
        });
    });

    $(".button__notice, .button__apply").click(function(){
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

});