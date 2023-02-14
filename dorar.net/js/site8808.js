var search_scope = '/site/search';
jQuery(".srch-scope").click(
    function(){
        search_scope = jQuery(this).attr("tag");
    }
)

$('#qq').keydown(function (e){
    if(e.keyCode == 13){
        window.location = search_scope + "?st=w&q=" + $('#qq').val();
    }
})

$('#q').keydown(function (e){
    if(e.keyCode == 13){
        window.location = search_scope + "?st=w&q=" + $('#q').val();
    }
})


$('#qq2').keydown(function (e){
   if(e.keyCode == 13){
       window.location = search_scope + "?st=w&q=" + $('#qq2').val();
   }
})

$('#q2').keydown(function (e){
   if(e.keyCode == 13){
       window.location = search_scope + "?st=w&q=" + $('#q').val();
   }
})


$('.do-search').click(function (){
    window.location = search_scope + "?st=w&q=" + $($(this).attr('tag')).val();
})


jQuery(".tashkeel-btn").click(function () {
   if (jQuery(this).hasClass("actv")) {
      jQuery(this).removeClass("actv");
      jQuery("#cntnt").data('orginal_text', jQuery("#cntnt").html());
      jQuery("#cntnt").html(jQuery("#cntnt").html().replace(/[\u0617-\u061A\u064B-\u0652]/g, ""));
   } else {
      jQuery(this).addClass("actv");
      jQuery("#cntnt").html(jQuery("#cntnt").data('orginal_text'));
   }
   
   fixtips();
});

   function fixtips() {

      var j = 0;

      jQuery(".tip").each(function () {
         j++;
         var x = jQuery(this).html();
         jQuery(this).html("");
         // jQuery("#enc-tip").clone().attr("title", x).attr("id", j).prependTo(jQuery(this));
         jQuery("#enc-tip").clone().attr("data-toggle", "tooltip").attr("title", x).attr("id", 'enc-' + j).insertAfter(jQuery(this));
         jQuery('#enc-' + j + ' sup').last().html('(' + j + ')');
         jQuery("#hamish").append('<p><a href="#enc-' + j + '">(' + j + ')</a> ' + x + "</p>");
         jQuery(this).remove();

      });
      jQuery("#enc-tip").remove();

      jQuery(".ref").each(function () {
         j++;
         var x = "<b>المصدر:</b><br>  ::" + jQuery(this).html();
         jQuery(this).html("");
         jQuery("#srs-tip").clone().attr("data-toggle", "tooltip").attr("title", x).attr("id", 'enc-' + j).insertAfter(jQuery(this));
         jQuery('#enc-' + j + ' sup').last().html('(' + j + ')');
         jQuery("#hamish").append('<p>(' + j + ') ' + x + "</p>");
         jQuery(this).remove();

      });
      jQuery("#srs-tip").remove();
      
      $('[data-toggle="popover"]').popover();

      jQuery('body').on('click', function (e) {
         if (!jQuery(e.target).hasClass('popover-body') && jQuery(e.target).attr('data-toggle') != 'popover' && jQuery(e.target).parent().attr('data-toggle') != 'popover')
            $('[data-toggle="popover"]').popover('hide');
      });
      
      }



      jQuery(".font-btn").click(function(){
        var f = parseFloat(jQuery("#font-controler").attr('fnt')) + parseFloat(jQuery(this).attr('step'));
        if (jQuery(this).attr('step') == '0.0') f = 1.05;

        var fnt = "font-size: " + f + 'em !important';
        jQuery("#font-controler").attr('fnt', f); 

        jQuery(".amiri_custom_content *").each(function(){
           jQuery(this).attr("style", function(i, s = '') {
              var patt = /;*font-size: \d+[.]*\d*em \!important/i;
              var patt2 = /;*font-size:\d+px/i;

              s = s.replace(patt2, '');
              s = s.replace(patt, '');
              

              return (s || '') + ";" + fnt
           } );
        });

        //jQuery(".amiri_custom_content *").each(function(){
        //	jQuery(this).css("font-size", fnt);
        //});
     });

      var clipboard = new ClipboardJS('.cp-page-share');

      clipboard.on('success', function (e) {
        console.log(e);
      });

      clipboard.on('error', function (e) {
        console.log(e);
      });




