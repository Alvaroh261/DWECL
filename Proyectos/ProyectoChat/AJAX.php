
<?php

require_once ("consultas.php");
    $consulta = new Consultas();

    //Comprobamos que el valor no venga vacío
    if(isset($_GET['funcion']) && !empty($_GET['funcion'])) {
        $funcion = $_GET['funcion'];

        //En función del parámetro que nos llegue ejecutamos una función u otra
        switch($funcion) {
            case 'funcion1': 
                $consulta->contactosPersona();
                break;
            case 'funcion2': 
                //$b -> accion2();
                break;
        }
    }