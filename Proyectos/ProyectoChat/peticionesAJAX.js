


function contactosChat() {
    /*Recojo la plantilla*/
    var plantilla = $('<div class="chat_list">').load("plantilla_Contactos.html");



    $.ajax({
        url: "AJAX.php",
        method: "GET",
        data: {funcion: "funcion1"},
        dataType: "json",
        success: function(respuesta) {
            //Accion diferente al otro AJAX
            var contactos = respuesta;
            console.log(plantilla)
            for (let contacto of contactos) {

                console.log(contacto);
                let item = $(plantilla).clone();

                $(item).find(".chat_name").text(contacto.nombre);
                /*$(item).find(".mensaje").text(contacto.nombre);
                $(item).find(".estado").text(contacto.nombre);
                $(item).find(".fecha").text(contacto.nombre);*/
                

                

                $('.inbox_chat').append(item);
            }
        }
    });

}

