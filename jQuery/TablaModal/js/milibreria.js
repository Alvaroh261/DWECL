//Aqui ya puedo utilizar la libreria de jquery


//window.addEventListener('load', function(){})
$(document).ready(function () {
  $("botonModal").click(function (){
    console.log("a");
    $("ventanaModal").css({"display": "block", "height": "30px","background-color": "yellow"});
  })
});