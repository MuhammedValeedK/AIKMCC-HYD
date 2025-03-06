(function ($) {
  "use strict";

  // Ensure jQuery is loaded
  if (typeof $ === "undefined") {
    console.error("jQuery is not loaded. Make sure jQuery is included before this script.");
    return;
  }

  // PRE LOADER
  $(window).on("load", function () {
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
  });

  // NAVBAR
  $(document).ready(function () {
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function () {
      $(".navbar-collapse").collapse('hide');
    });

    // Ensure Slick is loaded before initializing
    if (typeof $.fn.slick === "undefined") {
      console.error("Slick Carousel is not loaded. Make sure slick.min.js is included.");
      return;
    }

    // Initialize Slick Slideshow
    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    // Initialize Slick Testimonial
    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });

  });

})(jQuery);
