$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: true,
		navigation: true,
		navigationPosition: 'left',
		css3: true,
		controlArrows: false,
		afterLoad: function(anchorLink, index, slideIndex){
	        if (index === 1) {
	            $('#fp-nav').removeClass('show'); // or toggle by class
	        }
	        else {
	            $('#fp-nav').addClass('show'); // or toggle by class			            	            
	        }		       
		   	        
	    },
	    onLeave: function(anchorLink, index){		    	
	    	var sectionNum =  ".slide-thumb-wrap[data-page='" + index +"']";
	        if (index === 1) {
	            $('#fp-nav').hide(); // or toggle by class
	        }
	        else {
	            $('#fp-nav').show(); // or toggle by class
	        }
	        $('.slide-thumb-wrap').removeClass('show');
	        $(sectionNum).addClass("show");
	        history.pushState(null, null, "index.html");
	    },
	    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
	    	if (nextSlideIndex != undefined){		    		
		    	var sectionNum =  ".slide-thumb-wrap[data-page='" + index +"']";
		    	var slideNum = ".slide-thumb[data-scroll='" + nextSlideIndex +"']";
		    	$(sectionNum).find($('.slide-thumb-wrap a')).removeClass("active");
		    	$(sectionNum).find($(slideNum)).addClass('active');
	        }
	    },
	    afterSlideLoad : function( anchorLink, index, slideIndex, direction, nextSlideIndex){
	    	if(slideIndex!= undefined){
	    		alert($(this));
	    	}
	    }
	});
});

$(document).on('click', '.slide-thumb-wrap a', function(){
	var sectionNumber = $(this).parent().data('page');		
	var slideNumber = $(this).data('scroll');	
	$(this).siblings().removeClass("active");
	$(this).addClass("active");	
  	$.fn.fullpage.moveTo(sectionNumber, slideNumber);
});