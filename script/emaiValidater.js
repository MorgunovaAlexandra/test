$(document).ready(function(){
    $('.emailInput').each(function(index,emailInput){
      let inputElement=$(emailInput).find('input');
      $(inputElement).on('focus',function(){
        $(this).removeClass("blurred")
      }).on('blur',function(){
        $(this).addClass("blurred")
      })
    })
})