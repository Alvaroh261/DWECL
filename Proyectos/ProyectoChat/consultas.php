<?php

require_once ("gbd.php");

class Consultas {

    public function contactosPersona()
    {
        $gbd = new GBD();

        //$array = ["telefono" => 669257533];
        $coctactos = $gbd->contactosUsuario();
        echo json_encode($coctactos);
    }

    public function contactosUltimoMensaje()
    {
        $gbd = new GBD();

        //$array = ["telefono" => 669257533];
        $coctactos = $gbd->contactosUsuario();
        echo json_encode($coctactos);
    }
}


    

?>