/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

// main fullpage scrolling
  $(function() {
    let i = 0

    let _={
    throttling(fn, wait){
        let endTime = +new Date
        return function() {
            if(+new Date - endTime < wait){
                return;
            }
            fn.apply(this, arguments)
            endTime = +new Date
        }
    }
}

    function move(e){
        if(e.wheelDelta < 100){
            if(i === $('.aa').length -1) return;
            i++
        } else{
            if(i===0) return;
            i--
        }
        $('.on').css('transform', 'translateY(-${100 * i}vh)')
        $('.con li').eq(i).addClass('active').siblings().removeClass('active')
    }
    window.onmousewheel = _.throttling(move,800)
    window.onclick=_.throttling(move, 1000)

})

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict
