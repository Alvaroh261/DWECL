// alumno va a tener, su nombre, apellido 1, apellido 2, fecha de nacimiento. Por defecto nacionalidad española. 
//Para todos nombe completo y edad

/**
 *  Constructor de un alumno
 */
function Alumno(nombre, apellido1, apellido2, fechaNacimiento)
{
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fechaNacimiento=fechaNacimiento;
}

/**
 * Creamos el prototipo de la nacionalidad de una persona.
 * Prototype es añadir un valor por defecto al objeto
 */
Alumno.prototype.nacionalidad="Española";

/**
 * Metodo nombre completo 
 */
Alumno.prototype.nombreCompleto = function()
{
    return this.nombre + ", "+ this.apellido1 + " "+ this.apellido2;
}

/**
 * Metodo edad del alumno 
 */
Alumno.prototype.edad = function()
{
    var partes = this.fechaNacimiento.split("/");
    var fNac = new Date (partes[2], partes[1]-1, partes[0]);

    return (new Date((new Date())-fNac)).getFullYear()-1970;
}

/**
 * 
 * 
 */

 Alumno.prototype.presente = function ()
 {
     return "Hola soy " + this.nombreCompleto();
 }

