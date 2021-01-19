//Aqui ya puedo utilizar la libreria de jquery


//window.addEventListener('load', function(){})
$(document).ready(function() {  

  //select all the a tag with name equal to modal
  $('a[name=modal]').click(function(e) {
          //Cancel the link 
          e.preventDefault();

          //Conje el href del a
          var id = $(this).attr('href');

          //Get the screen height and width
          //Cojo el alto del documento y el ancho de la ventana
          var maskHeight = $(document).height();
          var maskWidth = $(window).width();

          console.log(maskHeight)
          console.log(maskWidth)
  
          //Set height and width to mask to fill up the whole screen
          $('#mask').css({'width':maskWidth,'height':maskHeight});
          
          //transition effect             
          $('#mask').fadeIn(1000);        
          $('#mask').fadeTo("slow",0.8);  
  
          //Get the window height and width
          var winH = $(window).height();
          var winW = $(window).width();
        
          //Set the popup window to center
          $(id).css('top',  winH/2-$(id).height()/2);
          $(id).css('left', winW/2-$(id).width()/2);
  
          //transition effect
          $(id).fadeIn(2000); 
  
  });
  
  //if close button is clicked
  $('.window .close').click(function (e) {
          //Cancel the link behavior
          e.preventDefault();
          $('#mask, .window').hide();
  });             
  
  //if mask is clicked
  $('#mask').click(function () {
          $(this).hide();
          $('.window').hide();
  });                     
  
});
