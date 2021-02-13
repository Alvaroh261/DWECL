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

    /**
     * Metodo que lee todos los registros de una tabla pudiendo seleccionar los campos
     *
     * @param string $tabla nombre de la tabla
     * @param array $campos campos a leer o null para todos
     * @return array de objetos con los datos
     */
    public function getAll($tabla, $campos = null, $orden = null)
    {
        $otroscampos = null;
        if (is_null($campos)) {
            $otroscampos = "*";
        } else {
            $otroscampos = implode(",", $campos);
        }

        if (is_null($orden)) {
            $sql = "select " . $otroscampos . " from " . $tabla;
        } else {
            $sql = "select " . $otroscampos . " from " . $tabla." ".$orden;

        }
        
        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error de lectura de datos: " . $e->getMessage());
        }
    }


    /**
     * Devuelve el registro con clave primaria
     *
     * @param string $tabla
     * @param array $valoresid valores de la/s clave/s primaria/s
     * @return void
     */
    public function findById($tabla, $valoresid)
    {
        $sql = "select * from " . $tabla . " where ";
        $claves = $this->getPrimaryKey($tabla);
        $cuantos = count($claves);

        $condicion = "";
        for ($i = 0; $i < $cuantos; $i++) {
            if ($i < $cuantos - 1) {
                $condicion .= $claves[$i] . "=? and ";
            } else {
                $condicion .= $claves[$i] . "=?";
            }
        }

        $sql .= $condicion;
        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute($valoresid);
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error leyendo por clave primaria: " . $e->getMessage());
        }
    }

    /**
     * Metodo que busca por campos
     * 
     * Ejemplo
     * $array = ["nombre" => "mastodonte", "chipeable" => 1];
     * $gbd->findByFields("tipo_mascota", $array);
     * 
     * @param string $tabla
     * @param array $valores array asociativo <campo>=><valor>
     * @return void
     */
    public function findByFields($tabla, $valores)
    {
        $sql = "select * from " . $tabla . " where ";
        $final = Funcion::endKey($valores);

        $condicion = "";
        foreach($valores as $campo=>$dato)
        {
            if ($campo != $final) {
                $condicion .= $campo . "=? and ";
            } else {
                $condicion .= $campo . "=?";
            }
        }
        $sql .= $condicion;

        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute(array_values($valores));
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error leyendo por los valores: " . $e->getMessage());
        }
    }

    /*Preguntas a manolo*/
    /**
     * Devuelve el registro con clave primaria
     *
     * Ejemplo
     * $arrayPKey = ['idRol' => 3];
     * print_r ($gbd->findByOne("persona", $arrayPKey));
     * 
     * 
     * @param string $tabla
     * @param array $valoresid array asociativo <campo>=><valor>
     * @return void
     */
    public function findByOne($tabla, $campovalor)
    {
        $sql = "select * from " . $tabla . " where " . array_keys($campovalor)[0] . " = ?";
        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->bindParam(1, array_values($campovalor)[0]);
            $consulta->execute();
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error leyendo por clave primaria: " . $e->getMessage());
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
        OR (sender = ".$usuario2." AND recibidor = ".$usuario1.") ORDER BY idMensaje DESC;";

        try {
            $consulta = $this->conexion->prepare($sql);
            $consulta->execute();
            $datos = $consulta->fetchAll(PDO::FETCH_OBJ);
            return $datos;
        } catch (PDOException $e) {
            throw new PDOException("Error leyendo por clave primaria: " . $e->getMessage());
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
