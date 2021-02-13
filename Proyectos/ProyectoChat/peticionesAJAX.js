/*************************************
 ********* Peticiones AJAX ***********
 * **********************************/

function contactosChat(numeroTelefono) {
    /*Recojo la plantilla*/
    var plantilla = $('<div class="chat_list">').load("plantilla_Contactos.html");

    var texto = "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. ";
    $.ajax({
        url: "AJAX.php",
        method: "GET",
        data: {funcion: "funcion1", numTelefono:numeroTelefono},
        dataType: "json",
        success: function(respuesta) {
            //Accion diferente al otro AJAX
            var contactos = respuesta;
            for (let contacto of contactos) {
                let item = $(plantilla).clone();

                var ultimoMensaje = texto.substr(0,45);

                $(item).find(".chat_name").text(contacto.nombre).css({"cursor": "pointer"});
                //$(item).find(".chat_name").data("telefono_"+contacto.telefono_amigo, contacto.telefono_amigo);
                
                $(item).find(".chat_message").text(ultimoMensaje+"...");
                
                if(contacto.nombre == "TOMASA"){
                    $(item).find(".chat_estado").text('11').css({"color": "#6793FF"});
                    $(item).find(".chat_date").text("01/02/20");

                } else if(contacto.nombre == "ALVARO"){
                    $(item).find(".chat_estado").text('11').css({"color": "#717D7E"});
                    $(item).find(".chat_date").text("15:45");
                } else {
                    $(item).find(".chat_estado").text('1').css({"color": "#717D7E"});
                    $(item).find(".chat_date").text("Ayer");
                }

                $(item).find(".chat_name").click(function () {
                    var telefono = contacto.telefono;
                    var telefono_amigo = contacto.telefono_amigo;

                    $(".msg_history").empty();
                    conversacionChat(telefono, telefono_amigo);
                });

                $('.inbox_chat').append(item);
            }
        }
    });
}

function conversacionChat(telefono, telefono_amigo) {

    var plantilla = $('<div class="chat_list">').load("plantilla_Contactos.html");
    var plantillaRecib = $('<div class="chat_list">').load("plantilla_Contactos.html");

    
    //$(".msg_history").empty();
    
    $.ajax({
        url: "AJAX.php",
        method: "GET",
        data: {funcion: "funcion2", telefono_usu: telefono, telefono_ami: telefono_amigo},
        dataType: "json",
        success: function(respuesta) {
            console.log(respuesta);

            /*var contactos = respuesta;
            for (let contacto of contactos) {
                let item = $(plantilla).clone();

                var ultimoMensaje = texto.substr(0,45);

                $(item).find(".chat_name").text(contacto.nombre).css({"cursor": "pointer"});
                //$(item).find(".chat_name").data("telefono_"+contacto.telefono_amigo, contacto.telefono_amigo);
                
                $(item).find(".chat_message").text(ultimoMensaje+"...");
                
                if(contacto.nombre == "TOMASA"){
                    $(item).find(".chat_estado").text('11').css({"color": "#6793FF"});
                    $(item).find(".chat_date").text("01/02/20");

                } else if(contacto.nombre == "ALVARO"){
                    $(item).find(".chat_estado").text('11').css({"color": "#717D7E"});
                    $(item).find(".chat_date").text("15:45");
                } else {
                    $(item).find(".chat_estado").text('1').css({"color": "#717D7E"});
                    $(item).find(".chat_date").text("Ayer");
                }

                $(item).find(".chat_name").click(function () {
                    var telefono = contacto.telefono;
                    var telefono_amigo = contacto.telefono_amigo;

                    $(".msg_history").empty();
                    conversacionChat(telefono, telefono_amigo);
                });

                $('.inbox_chat').append(item);
            }*/
        }
    });

}