//Aqui ya puedo utilizar la libreria de jquery


//window.addEventListener('load', function(){})
$(document).ready(function () {

  var peticionLandaza = false;
  var conexion;

  $("#textCountry").keyup(function () {
    if(peticionLandaza)
      conexion.abort();

    peticionLandaza = true;
    conexion = $.get("https://restcountries.eu/rest/v2/name/"+ $(this).val(), function (data, status) {
      if(status == "success")
      {
        select.empty();
        var option;
        var fronterizos;
        for (let i = 0; i < data.length; i++) {
          option = $("<option>").val(data[i].borders.join(";")).text(data[i].name);
          select.append(option);
          peticionLandaza = false;

          option.click(function (e) { 
            $.get("https://restcountries.eu/rest/v2/alpha?codes="+$(this).val(),
            function (data, status) {
              if(status == "success")
              {
                var caja = $("#banderas").empty();
                for (let i = 0; i < data.length; i++) {
                  $("<img>").attr({
                    width: 35,
                    height: 25,
                    src: data[i].flag
                  }).appendTo(caja);
                }
              }
            });
          });
        }
      }       
    });
  });

  var objeto = {"size":"20", "multiple":"multiple"};
  var select = $("<select>").width("200px").attr(objeto)
  .insertAfter("#textCountry");

  $("<div id='banderas'>").insertAfter(select);


});