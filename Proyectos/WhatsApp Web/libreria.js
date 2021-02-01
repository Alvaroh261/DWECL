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
                    $(divCon).click(function () { 
                        $("#nombreChat").text(identificado.contactos[i].nombre);



/* COnversaciones de la persona
                $.getJSON("./JSON/conversacion.json",
                    function (data, textStatus, jqXHR) {
                        if (textStatus == "success") {
                            console.log(data);
                        }
                    }
                ); */
















                    });
                    
                    $("#contactos").append($(divCon));
                }
            }
            
        }
    );
});
