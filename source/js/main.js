$(function() {
    $('.documentation').anchorific({
        navigation: '.anchorific', // position of navigation
        speed: 200, // speed of sliding back to top
        anchorClass: 'anchor', // class of anchor links
        anchorText: ' #', // prepended or appended to anchor headings
        top: '.top', // back to top button or link class
        spy: true, // highlight active links as you scroll
        position: 'append' // position of anchor text
    });

    $(window).scroll (function() {
      var y = $(window).scrollTop();
      // top offset of aside.anchorfic
      if (y >= 325) {
        $('.anchorific').addClass('fixed');
      } else {
        $('.anchorific').removeClass('fixed');
      }
    });
})
