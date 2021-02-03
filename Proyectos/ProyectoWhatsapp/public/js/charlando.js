$(document).ready(function() {
    $("#contenedor").load("plantillas/principal.html");
    //Peticion ajax para pedir los contactos
    var mitelefono = prompt("Cual es tu teléfono");
    $.ajax({
        url: "ajax/identificado.json",
        data: "mitelefono=" + mitelefono,
        method: "post",
        dataType: "json",
        success: function(data) {
            $("#contactos").data(data);
            console.log($("#contactos").data())
        }
    });
})