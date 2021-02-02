$(document).ready(function () {
    $.getJSON("./JSON/identificado.json",
        function (data, textStatus, jqXHR) {
            if (textStatus == "success") {
                var identificado = data;
                var tamContactos = identificado.contactos.length;

                for (let i = 0; i < tamContactos; i++) {
                    var divCon = $("<div>");
                    var contac = $("<p>").text(identificado.contactos[i].nombre);
                    $(divCon).append(contac);
                    $(divCon).addClass("border border-dark p-3 mb-2");
                    $(divCon).data("numero", identificado.contactos[i].telefono);


                    $(divCon).click(function () {
                        $("#nombreChat").text(identificado.contactos[i].nombre);
                        var conversacionSelect = $(this).data("numero");
                        borrar();

                        /* Conversaciones de la persona*/
                        $.getJSON("./JSON/conversacion.json",
                            function (data, textStatus, jqXHR) {
                                if (textStatus == "success") {
                                    var conversacion = data;
                                    var tamConversacion = conversacion.length;

                                    for (let i = 0; i < tamConversacion; i++) {
                                        $(divConv).css({ "background-color": "lightgreen", "float": "right" });

                                        var divConv = $("<div>");
                                        var texto = $("<p>").text(conversacion[i].mensaje);
                                        var fechaHora = $("<small>").text(conversacion[i].fechaHora);
                                        $(divConv).append(texto);
                                        $(divConv).append(fechaHora);
                                        $(divConv).css({ "width": "50%" });
                                        $(divConv).addClass("rounded my-2 mx-3");

                                        if (identificado.mitelefono == conversacion[i].sender) {
                                            $(divConv).css({ "background-color": "lightgreen", "float": "right" });

                                        } else {
                                            $(divConv).css({ "background-color": "white", "float": "left" });

                                        }

                                        $("#chat").append($(divConv));
                                    }
                                }

                                $("#chat").scrollTop(9999999999999999999999999999e+10);
                            }

                        );

                    });

                    $("#contactos").append($(divCon));
                }
            }

        }
    );
});


function borrar() {
    $("#chat").children().remove();
}
