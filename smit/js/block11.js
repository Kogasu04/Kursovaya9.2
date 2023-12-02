$(document).ready(() => {
   $(function () {
      $('.accordion-body, .accordion-btn').click(function () {
         var isOpen = $(this).parent().hasClass('open');

         $('.accordion-item').removeClass('open');
         $('.accordion-btn').text('+');

         if (!isOpen) {
            $(this).parent().addClass('open');
            $(this).parent().find('.accordion-btn').text('-');
         }
      });
   });
})