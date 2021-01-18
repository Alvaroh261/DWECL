/*Ejercicio expresiones regulares*/
//1.- un numero positivo o negativo
function numPositivoNevativo()
{
    /^(|\-)[0-9]$/ig
}

//2.- codigo postal
/*
^ -> Comienzo de 

() -> Cadena a comprobar que cumpla esos requisitos

0[1-9] - > numero que empiece por 0 y el siguiente numero sea entre 1 y 9
[1-4]\d y esto [1-4][0-9] es lo mismo le estoy diciendo que busque un numero entre 10 y 49

5[0-2] -> numero que empiece por 5 y el siguiente numero sea 1 o 2

\d{3} y estoy [0-9]{3} --> es lo mismo que los siguientes 3 nuemros cada uno este comprendido entre 0 y 9
*/
function codigoPostal()
{
    /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/ig
}

//3.- numero de cuenta bancario
function cuentaBancaria()
{
    /^([A-Z][A-Z]\d{2})((| |\-)(\d{4})){2}(| |\-)(\d{2})(| |\-)(\d{10})$/ig
}

//4.- tarjeta de credito
function tarjetaCretido()
{
    /^(\d{13}|\d{14}|\d{15}|\d{16}|\d{17}|\d{18})$/ig
}

//5.- codigo de barrras EAN8, EAN13
function codigoBarrasEAN8_EAN13()
{
    /^(\d{8}|\d{13})$/ig
}

//6.- Matricula española XXXXXX-M, M-XXXX-AB, XXXX BGD
function matriculaEspaniola()
{
    /^(\d|[^AEILÑOQUaeilñoqu])(\d|\-)(\d{2})( |\d)(\d|[^AEILÑOQUaeilñoqu])([^AEILÑOQUaeilñoqu]|\-)[^AEILÑOQUaeilñoqu](|[^AEILÑOQUaeilñoqu])$/ig
}

//7.- IP
function direccionIP()
{
    /^((\d|\d{2}|[0-1]\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|\d{2}|[0-1]\d{2}|2[0-4]\d|25[0-5])$/ig
}

//8.- MAC
function direccionMac()
{
    /^([0-9A-F]{2}(:|\-)){5}[0-9A-F]{2}$/ig
}


//9.- direccion web
function direccionWeb()
{
    /^http(|s)(:\/\/www\.)([\dA-z]){1,40}(\.)([\dA-z]){1,10}(\.)([\dA-z]){3}$/ig
}

//10.- email
function email()
{
    /^([\dA-z]){1,40}(\@)([\dA-z]){1,10}(\.)([\dA-z]){3}$/ig
}


//11.- temperatura grados celsius y farengai
function celsiusFarengai()
{
    /^(|\-)(\d){1,4}$/ig
}


//12.- Aula de este instituto (pcE) -> p platan, c clase, e edifidicio 21B hasta 39 edifidicio a y b
function plantaInstituto()
{
    /^pce(| |\-)([0-2]\d|[0-3][0-9])[abAB]$/ig
}

//13.- cordenadas gps (37.7756973,-3.7861114)
function cordenadasGPS()
{
    /^(|\-)((|1)(\d){1,2})(\.)(\d){1,7}(\,)(|\-)((|1)(\d){1,2})(\.)(\d){1,7}$/ig
}

//14.- telefono 0034 TELEFONO, +34 telefono, telefono
function telefono()
{
    
}

//15.- isbn
function isbn()
{
    /^(\d){3}(|\-| )(\d)(|\-| )(\d){2}(|\-| )(\d){6}(|\-| )(\d)$/ig
}

//16.- nombre persona (nombre y apellido)
function nombreApellido()
{
    /^(([A-z]){1,75}(|\, |\,| )){3}$/ig
}

//17.- IMEI
function nombreApellido()
{
    /^(\d){6}(|\/)(\d){2}(|\/)(\d){6}(|\/)(\d)$/ig
}
