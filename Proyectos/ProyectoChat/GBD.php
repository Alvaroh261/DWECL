<?php

class GBD
{
    private $conexion;
    
    /**
     * Constructor donde se crea la conexión
     *
     * @param string $host url del servidor
     * @param string $basedatos nombre de la base de datos
     * @param string $usuario
     * @param string $password
     * @param string $driver driver para el servidor de base de datos
     */
    public function __construct($host= "localhost" , $basedatos = "chatajax", 
    $usuario = "AlvaroHM", $password = "1234", $driver="mysql")
    {
        //Dependiendo del valor de driver construir dsn adecuado
        switch ($driver) {
            case 'mysql':
                $dsn = $driver . ":dbname=" . $basedatos . ";host=" . $host;
                break;
        }
        $dsn = $driver . ":dbname=" . $basedatos . ";host=" . $host;

        try {
            $this->conexion = new PDO($dsn, $usuario, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        } catch (PDOException $e) {
            throw new PDOException("Error en la conexión: " . $e->getMessage());
        }
    }

    public function contactosUsuario($numeroTelefono)
    {
        $sql = "select con.telefono, con.telefono_amigo, usu.nombre, usu.fechaAcceso, usu.foto 
        from contactos con left join usuario usu 
        on con.telefono_amigo = usu.telefono  where con.telefono = ".$numeroTelefono.";";

        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error leyendo por clave primaria: " . $e->getMessage());
        }
    }

    public function mensajesConversacion($usuario1, $usuario2)
    {
        $sql = "select * from mensaje where (sender = ".$usuario1." AND  recibidor = ".$usuario2.") 
        OR (sender = ".$usuario2." AND recibidor = ".$usuario1.") ORDER BY fechaEnvio asc;";

        
        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error leyendo por clave primaria: " . $e->getMessage());
        }
    }

    public function insertarMensajes($sender, $recibidor, $imagen, $estado, $fechaEnvio, $mensaje)
    {
        try 
        {
            $sql = 'INSERT INTO mensaje (sender, recibidor, imagen, estado, fechaEnvio, mensaje) 
            VALUES (?, ?, ?, ?, ?, ?);';
            $consulta = $this->conexion->prepare($sql);
            
            $consulta->bindParam(1, $sender);
            $consulta->bindParam(2, $recibidor);
            $consulta->bindParam(3, $imagen);
            $consulta->bindParam(4, $estado);
            $consulta->bindParam(5, $fechaEnvio);
            $consulta->bindParam(6, $mensaje);

            $consulta->execute();
        }
        catch (PDOException $error) 
        {
            die("Error: ".$error->getMessage());
        }
    }



    










    /**
     * Metodo que nos dice cuanl es la/s clave/s primaria/s de una tabla
     *
     * @param string $tabla nombre de la tabla
     * @return array con los nombres de la/s clave/s primaria/s
     */
    private function getPrimaryKey(string $tabla)
    {
        $sql = "SHOW KEYS FROM $tabla WHERE Key_name = 'PRIMARY'";
        $consulta = $this->conexion->query($sql);
        $datos = $consulta->fetchAll(PDO::FETCH_ASSOC);
        return array_column($datos, "Column_name");
    }

    /**
     * Devuelve la conexión
     *
     * @return void
     */
    public function getConexion()
    {
        return $this->conexion;
    }
}
