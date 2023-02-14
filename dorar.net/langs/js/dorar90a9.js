$(document).ready(function () {
  new WOW().init();
  $(".second-button, .navbar-collapse a").on("click", function () {
    // $(".animated-icon2").toggleClass("open");
    $(".navbar-collapse").collapse("hide");
  });

  // SideNav Button Initialization
  $(".button-collapse").sideNav({
    // edge: "right",
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  // SideNav Button Initialization
  $(".button-collapse2").sideNav({
    // edge: "right",
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
   // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);
  // Material Select Initialization
  $(".mdb-select").materialSelect();
});

//mdb-preloader
$(window).on("load", function () {
  $("#mdb-preloader").delay(1000).fadeOut(300);
});

//mdb-preloader consle test
function showloader() {
  $("#mdb-preloader").delay(1000).fadeIn(300);
}

function hideloader() {
  $("#mdb-preloader").delay(1000).fadeOut(300);
}

//Animation
// let wow = new WOW({
//   boxClass: "wow", // default
//   animateClass: "animated", // default
//   offset: 0, // default
//   mobile: true, // default
//   live: true, // default
// });

//counter
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals"),
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.text(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null, // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function ($) {
  // start all the timers
  $(".timer").each(count);

  // restart a timer when a button is clicked
  $(window).scroll(function () {
    //console.log($(window).scrollTop());
    if ($(window).scrollTop() > 300 && $(window).scrollTop() < 850) {
      $(".timer").each(count);
    }
  });

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});


$('.nav-link').click(
    function(){
        $('#sidenav-overlay').trigger( "click" );
    }
);

if($('#books').length) {
	$('#books').on('change', function() {
		var book = this.value;
		$(".chapter").each(
			function(){
				if($(this).attr('parent') == book)
					$(this).show();
				else
					$(this).hide();
			}
		);
	});

	$('#books2').on('change', function() {
		var book = this.value;
		$(".chapter").each(
			function(){
				if($(this).attr('parent') == book)
					$(this).show();
				else
					$(this).hide();
			}
		);
	});


	$(function(){
		$(".chapter").each(
			function(){
				if($(this).attr('parent') == 1)
					$(this).show();
				else
					$(this).hide();
			}
		);
	})
}
