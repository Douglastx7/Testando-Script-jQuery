$('.row_Top a').click(function (e) {
    e.preventDefault();
    var itemId = $(this).attr('href');
    $('.row_Top a').removeClass('activeButton');
    $('.product_specification_content').removeClass('activeDiv');
    $(this).addClass('activeButton');
    $(itemId).addClass('activeDiv');
});


// ========= ACORDION


       $('.accordion_content').slideUp('auto');
       $('.active_product').click(function() {
          $('.active_product').toggleClass('ativarSeta');
          const ativarSeta = $()
         $('.accordion_content').slideToggle('auto');
      });


      // ========= ACORDION  specification__mobile


      $('.accordion_content_specification_1').slideUp('auto');
      $('.accordion_content_specification_2').slideUp('auto');
      $('.accordion_content_specification_3').slideUp('auto');

      $('.active_specification__mobile_1').click(function() {
         $('.active_specification__mobile_1').toggleClass('ativarSeta_specification__mobile');
        $('.accordion_content_specification_1').slideToggle('auto');
     });

     $('.active_specification__mobile_2').click(function() {
        $('.active_specification__mobile_2').toggleClass('ativarSeta_specification__mobile');
       $('.accordion_content_specification_2').slideToggle('auto');
    });

    $('.active_specification__mobile_3').click(function() {
        $('.active_specification__mobile_3').toggleClass('ativarSeta_specification__mobile');
       $('.accordion_content_specification_3').slideToggle('auto');
    });


   //  FUNCTION SLIDER

   // $('.thumbs').slick({
   //    infinite: true,
   //    slidesToShow: 1,
   //    slidesToScroll: 1,
   //    lazyLoad: 'ondemand',
   //    arrows: false,
   //      dots: true,


   //    responsive: [
   //      {
   //        breakpoint: 992,
   //        settings: {
   //          slidesToShow: 1,
   //          slidesToScroll: 1,
   //        }
   //      },
   //      {
   //        breakpoint: 768,
   //        settings: {
   //          slidesToShow: 1,
   //          slidesToScroll: 2,
   //          centerMode: true,
   //          adaptiveHeight: true,
   //        },
   //      },
   //    ]
   //  });

 function teste() {

   $('.thumbs').slick({
   });

 }

 teste()
  