

/*=========================
    Venobox plugin 
==========================*/

(function(){
  $('.venobox').venobox(); 
})();


/*=========================
  wow jquery plugins
==========================*/

$(function(){
  new WOW().init();
}); 



/*=========================
    slick slider plugin 
==========================*/

(function(){
    $('.product_slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        prevArrow: '<i class="fas fa-chevron-left prevBtn"></i>',
        nextArrow: '<i class="fas fa-chevron-right nextBtn"></i>',
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})();




/*=========================
   counter down plugin
==========================*/
 
 $(document).ready(function(){
  loopcounter('counter-class');
});


