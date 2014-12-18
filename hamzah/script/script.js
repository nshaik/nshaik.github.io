$(function(){
	$('.classWeb .links a').on('click', function(e){
		e.preventDefault();
		var hrf = $(this).attr('href');
		$(this).addClass('active').siblings().removeClass('active');
		$('#MainContent_iframeWindow').attr('src',hrf);		
	});
});
