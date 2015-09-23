$(document).ready(function($) {
	// Open Content
	$('.accordion-item').find('.accordion-header').click(function() {
		//Expand or collapse this panel
		$(this).next().slideToggle('fast');
		
		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp('fast');
	});
	
	// Close Content
	$('.accordion-item').find('.close-btn').click(function() {
		//Expand or collapse this panel
		$(this).next().slideToggle('fast');
		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideDown('slow');
	});
	
	function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top)
        $('#inner-report').addClass('sticky')
      else
        $('#inner-report').removeClass('sticky');
      }
     
     $(function() {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
      });
     
});
