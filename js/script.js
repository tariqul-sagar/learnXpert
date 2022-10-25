(function(){


	$('.b_box').mouseenter(function(){
		$(this).find('.bb_box').css({'top':'-100%'});
		$(this).find('.rc_overlay').css({'top':'0'});
	}).mouseleave(function(){
		$(this).find('.bb_box').css({'top':'0'});
		$(this).find('.rc_overlay').css({'top':'100%'});
	});

	

})(jQuery);