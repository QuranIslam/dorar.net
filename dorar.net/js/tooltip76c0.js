jQuery(function(){
	
	var j = 0;
	
	jQuery(".tip").each(

	   function(){
		  j++;
		  var x = jQuery(this).html();
		  x = x.replace(/\[\d+\]/g, "");
		  jQuery(this).html("");
		  //jQuery("#enc-tip").clone().attr("title", x).attr("id", j).prependTo(jQuery(this));
		  jQuery("#enc-tip").clone().attr("data-content", x).attr("id", 'enc-' + j).insertAfter(jQuery(this));
		  jQuery('#enc-' + j + ' sup').last().html('(' + j + ')');
		  jQuery("#hamish").append('<li><a href="#enc-' + j + '">(' + j + ')</a> ' + x + "</li>");
		  jQuery(this).remove();
		  
	});
	   
	
	jQuery(".ref").each(

	   function(){
		  j++;
		  var x = jQuery(this).html();
		  x = x.replace(/\[\d+\]/g, "");
		  
		  jQuery(this).html("");
		  jQuery("#enc-tip").clone().attr("data-content", x).attr("id", 'enc-' + j).insertAfter(jQuery(this));
		  jQuery('#enc-' + j + ' sup').last().html('(' + j + ')');
		  jQuery("#hamish").append('<li><a href="#enc-' + j + '">(' + j + ')</a> ' + x + "</li>");
		  jQuery(this).remove();
		  
	});

	jQuery("#enc-tip").remove();

	if(jQuery("#hawamish-btn").length){
	   if(j > 0)
		  jQuery("#hawamish-btn").css('display', 'block');
	   else
		  jQuery("#hawamish-btn").css('display', 'none');
	}

 });

 $(document).ready(function(){
	$('[data-toggle="popover"]').popover();

	jQuery('body').on('click', function (e) {
		if (!jQuery(e.target).hasClass('popover-body') && jQuery(e.target).attr('data-toggle') != 'popover' && jQuery(e.target).parent().attr('data-toggle') != 'popover')
			$('[data-toggle="popover"]').popover('hide');
	});
 });

 