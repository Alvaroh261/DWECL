//Aqui ya puedo utilizar la libreria de jquery


//window.addEventListener('load', function(){})
$(document).ready(function () {


  //eq(0) = thead[0]
  $("thead").eq(0).css({ 'color': 'white', 'font-size': '1.em', 'background-color': 'gray' })

  //Esto seria todas las filas pares del tbody
  $("tbody tr:odd").css({ 'background-color': 'lightgray' })

  //Esto seria un evento, que me dice al hacer click el texto que contiene el td
  $("tbody td").click(function () {
    //alert($(this).text());

    if ($(this).css('color') === "rgb(0, 0, 0)") {
      $(this).css({ 'color': 'red' });
    } else {
      $(this).css({ 'color': 'black' });
    }
  })


  $("tbody td").click(function () {
    //alert($(this).text());

    if ($(this).text() != "") {
      var input = $("<input>").attr("type", "text").val($(this).text());
      $(this).empty().append(input);
      input.focus();

      input.blur(function() {
        $(this).parent().html($(this).val());
      })
    }
  })

  //Al hacer el evento dobleclick quito esa fila
  $("tbody tr").dblclick(function () {
    $(this).hide();
  })

  //Al hacer el evento dobleclick muestro todos los tr del tbody ocultos
  $("thead").dblclick(function () {
    $("tbody tr").show();
  })






});