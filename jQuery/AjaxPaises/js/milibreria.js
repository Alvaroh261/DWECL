//Aqui ya puedo utilizar la libreria de jquery


//window.addEventListener('load', function(){})
$(document).ready(function () {

  $("#textCountry").keyup(function () {
    var key = $(this).val();
    var url = "https://restcountries.eu/rest/v2/name/"+ key;

    $("select option").each(function() {
      $(this).remove();
    });
  
    $.get(url,
      function (data, textStatus, jqXHR) {
        // Este data es los datos que yo cojo de la pagina web
        for (let i = 0; i < data.length; i++) {
          if($("select option").eq(i).text() != data[i].name) {
            var option = $("<option>")
            option.text(data[i].name);
            $("select").append(option);
          }         
        }
      }
    );
  });
});