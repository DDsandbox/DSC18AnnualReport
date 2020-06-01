$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    // var offsetAmt = -0.5 * $('header').outerHeight();
    var offsetAmt = 0;
    if (target.data("scrolloffset")) {
      offsetAmt = target.data("scrolloffset");
    }
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top + offsetAmt
      }, 700);
      return false;
    }
  }
});
