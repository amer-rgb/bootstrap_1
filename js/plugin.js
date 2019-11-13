/* global $, alert,jquery */
$(function() { 
    'use strict';
    /* nice scroll*/ 
    $('html').niceScroll({
      cursorwidth: "10px"
  });
    $('.carousel').carousel({
        interval: 6000
    })
    //show color option div
    $('.gear-check').click(function(){
      $('.color-option').fadeToggle();
    }); 
    // change theme color on click
    let colorLi = $('.color-option ul li'),
        scrolltop = $('#scrolltop');
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009Aff").end()
    .eq(3).css("backgroundColor","#ffD500").end()
    colorLi.click(function (){
      $("link[href*='them']").attr("href",$(this).attr("data-value"))
    });  
    /*loading page*/
   $(window).load(function(){
     'use strict';
     $(".lds-roller").fadeOut(2000,function() { 
       $("body").css("overflow", "auto")
       $(this).parent().fadeOut(2000, function() {
         $(this).remove()
       })
     });
   }); 
   /*scroll to top */
   scrolltop.hide()
   $(window).scroll(function (){
    $(this).scrollTop() >= 700 ? scrolltop.fadeIn() : scrolltop.fadeOut()
   });
   scrolltop.click(function() {
    $('body,html').animate({scrollTop : 0},600)
  }); 
});
       