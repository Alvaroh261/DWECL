//Aqui ya puedo utilizar la libreria de jquery

//window.addEventListener('load', function(){})
$(document).ready(function () {

  $.ajax({
    //Metodo que vamos a utilizar, (GET o POST)
    type: "POST",

    //URL de la api a utilizar
    url: "http://api.ipstack.com/84.122.21.141?access_key=f74e1dac923a162a1305a516683f9a33",

    //Aqui se habilitaria si se va a enviar algo por GET
    //data: "data",

    //Que tipo de archivo nos devuelve la peticion AJAX
    dataType: "json",
  })
    .done(function (data) {
      leerTiempoCiudad(data.city);
    })
});

//Hacemos una operacion callback
function leerTiempoCiudad(ciudad) {
  $.ajax({
    type: "POST",
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=0bab6a49ff0be0b3dbbb3d47e1036fe0",
    dataType: "json",
  })
    .done(function (data) {
      var parrafo = $("<p>");
      var resultado = (data.main.temp) -273.15;
      parrafo.text("La temperatura en "+data.name+" es de "+Math.round(resultado)+"º C");
      $("#pais").append(parrafo);
    })
}