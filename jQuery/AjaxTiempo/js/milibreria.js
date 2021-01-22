//Aqui ya puedo utilizar la libreria de jquery


//window.addEventListener('load', function(){})
$(document).ready(function () {

  $("#textCountry").keyup(function () {
    var key = $(this).val();
    var url = "https://restcountries.eu/rest/v2/name/"+ key;

    $.get(url, function (data, status) {
      if(status == "success")
      {
        console.log(data);
        select.empty();
        var option;
        for (let i = 0; i < data.length; i++) {
          option = $("<option>").val(data[i].border.join(";")).text(data[i].name);
          select.append(option);
          peticionLandaza = false;

          option.click(function (e) { 
            $.get("https://restcountries.eu/rest/v2/alpha?codes="+$(this).val(),
            function (data, status) {
              if(status == "success")
              {
                var caja = $("#bandera").empty();
                for (let i = 0; i < data.length; i++) {
                  $("<img>").attr({
                    width: 35,
                    height: 25,
                    src: data[i].flag,
                  });
                  
                }
              }
            });
          });
        }
      }       
    });
  });


});