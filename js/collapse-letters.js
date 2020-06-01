function resetWaypoints() {
  Waypoint.destroyAll();
  setTimeout(function(){
    var waypoints = $('.timeline-item').waypoint(function(direction) {
      if (!this.element.className.includes("animate-in")) {
        this.element.className += " animate-in"
      }
    }, {
      offset: 'bottom-in-view'
    });
  }, 650);
}

$(".collapse-button").click(function() {
  var h = $(this).parent().children(".collapsible").children(".inner").actual("height");

  if ($(this).parent().children(".collapsible").hasClass("collapsed")) {
      $(this).parent().children(".collapsible").css("height", h);
      $(this).parent().children(".collapsible").removeClass("collapsed");
      $(this).addClass("is-open");
      $(this).children("h3").text("close");
  } else {
    $(this).parent().children(".collapsible").css("height", 130);
    $(this).parent().children(".collapsible").addClass("collapsed");
    $(this).removeClass("is-open");
    $(this).children("h3").text("read more");

    var target = $(this).parent();
    var offsetAmt = -16;
    $('html, body').animate({
      scrollTop: target.offset().top + offsetAmt
    }, 600);
  };
  resetWaypoints();
});

// make collapsibles update height on window resize
var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    $(".collapsible").each(function(){
      if (!($(this).hasClass("collapsed"))) {
        var newHeight = $(this).children(".inner").height();
        $(this).css("height", newHeight);
        resetWaypoints();
      };
    });
  }, 250);
});
