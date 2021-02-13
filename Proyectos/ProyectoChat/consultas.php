<?php

require_once ("gbd.php");

class Consultas {

    public function contactosPersona($telefono)
    {
        $gbd = new GBD();
        $coctactos = $gbd->contactosUsuario($telefono);
        echo json_encode($coctactos);
    }

    public function conversacion($usuario1, $usuario2)
    {
        $gbd = new GBD();
        $mensajes = $gbd->mensajesConversacion($usuario1, $usuario2);
        echo json_encode($mensajes);
    }
}


    

?>