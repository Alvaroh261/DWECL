$(document).ready(function () {

    $(".buscar").click(function () {
        $(".inbox_chat").empty();
        $(".msg_history").empty();
        var numTelefono = $("#buscador").val();

        if(numTelefono.length == 9){
            contactosChat(parseInt(numTelefono));
        } else {
            alert("Pon bien el tamaño del numero que no te cuesta nada hombre/mujer");
        }
    });

    $(".enviar").click(function () {
        var texto = $(".text_conversacion").val();
        enviarMensaje(texto);
    });
});

