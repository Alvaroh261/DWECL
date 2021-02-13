<?php

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

            case 'funcion3':
                $sender = $_GET['sender'];
                $recibidor = $_GET['recibidor'];
                $imagen = $_GET['imagen'];
                $estado = $_GET['estado'];
                $fechaEnvio = $_GET['fechaEnvio'];
                $mensaje = $_GET['mensaje'];
                $consulta->envioMensaje($sender, $recibidor, $imagen, $estado, $fechaEnvio, $mensaje);
                break;
        }
    }