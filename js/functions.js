// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});


// jquery image switcher
$(function(){
	var $setElem = $('.switch'),
	pcName = '_pc',
	spName = '_sp',
	replaceWidth = 767;

	$setElem.each(function(){
		var $this = $(this);
		function imgSize(){
			var windowWidth = parseInt($(window).width());
			if(windowWidth >= replaceWidth) {
				$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
			} else if(windowWidth < replaceWidth) {
				$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});
});