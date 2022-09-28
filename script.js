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
         $('.accordion_content').slideToggle('auto');
      });
