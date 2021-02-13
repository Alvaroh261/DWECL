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
        data: { funcion: "funcion1", numTelefono: numeroTelefono },
        dataType: "json",
        success: function (respuesta) {
            //Accion diferente al otro AJAX
            var contactos = respuesta;

            //Guardo el telefono de la persona que se registra
            $(".miNumero").data("telefonoUsuario", contactos[0].telefono);

            for (let contacto of contactos) {
                let item = $(plantilla).clone();

                var ultimoMensaje = texto.substr(0, 45);

                $(item).find(".chat_name").text(contacto.nombre).css({ "cursor": "pointer" });
                $(item).find(".chat_name").data("telefonoAmigo",contacto.telefono_amigo);

                $(item).find(".chat_message").text(ultimoMensaje + "...");

                if (contacto.nombre == "TOMASA") {
                    $(item).find(".chat_estado").html('&#10003;').css({ "color": "#6793FF" });
                    $(item).find(".chat_date").text("01/02/20");

                } else if (contacto.nombre == "ALVARO") {
                    $(item).find(".chat_estado").html('&#10003;').css({ "color": "#717D7E" });
                    $(item).find(".chat_date").text("15:45");
                } else {
                    $(item).find(".chat_estado").html('&#10003;').css({ "color": "#717D7E" });
                    $(item).find(".chat_date").text("Ayer");
                }

                $(item).find(".chat_name").click(function () {
                    $(".enviar").data("boton",$(this).data("telefonoAmigo"));
                    
                    conversacionChat($(".miNumero").data("telefonoUsuario"), $(this).data("telefonoAmigo"));
                });

                $('.inbox_chat').append(item);
            }
        }
    });
}

function conversacionChat(telefono, telefono_amigo) {
    $(".msg_history").empty();
    var plantillaUsuario = $('<div class="outgoing_msg">').load("plantilla_msn_usuario.html");
    var plantillaAmigo = $('<div class="incoming_msg">').load("plantilla_msn_amigo.html");

    $.ajax({
        url: "AJAX.php",
        method: "GET",
        data: { funcion: "funcion2", telefono_usu: telefono, telefono_ami: telefono_amigo },
        dataType: "json",
        success: function (respuesta) {
            var mensajes = respuesta;
            for (let mensaje of mensajes) {
                var fecha = fechaHora(mensaje.fechaEnvio);

                if (telefono == mensaje.sender) {
                    let itemUsu = $(plantillaUsuario).clone();
                    $(itemUsu).find(".msg_usuario").text(mensaje.mensaje);
                    $(itemUsu).find(".time_date").text(fecha);
                    $('.msg_history').append(itemUsu);

                } else {
                    let itemAmi = $(plantillaAmigo).clone();
                    $(itemAmi).find(".msg_amigo").text(mensaje.mensaje);
                    $(itemAmi).find(".time_date").text(fecha);
                    $('.msg_history').append(itemAmi);
                }
            }
        }
    });

}

function fechaHora(fechaHora) {
    var tiempo = new Date(fechaHora);
    let hora;
    if (tiempo.getHours() >= 0 && tiempo.getHours() < 10) {
        hora = "0" + tiempo.getHours() + ":" + tiempo.getMinutes()
    } else {
        hora = tiempo.getHours() + ":" + tiempo.getMinutes();
    }

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var numeroMes = parseInt(tiempo.getMonth());
    let mes;
    if (numeroMes >= 1 && numeroMes <= 12) {
        mes = meses[numeroMes];
    }

    let fecha = tiempo.getDate() + "/" + mes + "/" + tiempo.getFullYear();

    return hora + " | " + fecha;
}


function enviarMensaje(mensaje) {

    //$(".msg_history").empty();
    let fEnvio = new Date();

    var fecha = fEnvio.getFullYear() + "-" + (fEnvio.getMonth() + 1) + "-" + fEnvio.getDate() + " " +
        fEnvio.getHours() + ":" + fEnvio.getMinutes() + ":" + fEnvio.getSeconds();

        
    $.ajax({
        url: "AJAX.php",
        method: "GET",
        data: {
            funcion: "funcion3",
            sender: $(".miNumero").data("telefonoUsuario"),
            recibidor: $(".enviar").data("boton"),
            mensaje: mensaje,
            imagen: 0,
            estado: 0,
            fechaEnvio: fecha
        }
    });

    var teAmi = $(".enviar").data("boton");
    var teUsua = $(".miNumero").data("telefonoUsuario");
    conversacionChat(teUsua, teAmi);

}