var callback = function(){
	
  $('.x-filter-action').click(function(){
    
    var text = $(this).text();
    var selector = '.x-sel-' + text
      .replace(/\s+/g,'-')
      .replace('++','pp')
      .replace('#','sharp')
      .toLowerCase();
    ;
    
    $('.x-project').hide();
    $(selector).show();
    
    
  });

  $('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
        $(this).animate({
            width: newWidth,
        }, 1000);
	});
    
	$('.icons-red').each(function(){
		height = $(this).height();
        $(this).animate({
            height: 14,
        }, 2000);
	});
    
  jQuery(".fancybox").fancybox({
    groupAttr: 'data-rel',
    prevEffect: 'fade',
    nextEffect: 'fade',
    openEffect  : 'elastic',
    closeEffect  : 'fade',
    closeBtn: true,
    helpers: {
    title: {
            type: 'float'
        }
    }
  });

  $(".fbox-modal").fancybox({
      maxWidth    : 800,
      maxHeight   : 600,
      fitToView   : false,
      width       : '70%',
      height      : '70%',
      autoSize    : false,
      closeClick  : false,
      closeEffect : 'fade',
      openEffect  : 'elastic'
  });
  
  $('.image-gallery').lightSlider({
      gallery:true,
      item:1,
      slideMargin: 0,
      pager:false,
      speed:1000,
      auto:true,
      loop:true,
      onSliderLoad: function() {
          $('.image-gallery').removeClass('cs-hidden');
      }  
  });
    
};


$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};