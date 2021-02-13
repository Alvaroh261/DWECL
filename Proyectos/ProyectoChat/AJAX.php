<?php

use PhpParser\Node\Stmt\Echo_;

require_once ("consultas.php");
    $consulta = new Consultas();

    //Comprobamos que el valor no venga vacío
    if(isset($_GET['funcion']) && !empty($_GET['funcion'])) {
        $funcion = $_GET['funcion'];
        
        //En función del parámetro que nos llegue ejecutamos una función u otra
        switch($funcion) {
            case 'funcion1':
                $numeroTelefono = $_GET['numTelefono'];
                $consulta->contactosPersona($numeroTelefono);
                break;
            case 'funcion2':
                $usuario1 = $_GET['telefono_usu'];
                $usuario2 = $_GET['telefono_ami'];
                $consulta->conversacion($usuario1, $usuario2);
                break;
        }
    }