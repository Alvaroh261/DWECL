/*Presencial
Alvaro Hernandez Martinez
Curso 2020/21
*/


//FICHERO NOTAS

//Contructor para objeto Alumno. 
//Donde: nombre es el nombre del alumno
//       asignaturas es el vector de asignaturas 
//       notas es el vector de punteros a los tds que contienen las notas notas del alumno.
/*Propiedades
    nombre
    asignaturas
    notas

*/

/*Objeto de tipo alumno*/
function Alumno(nombre,asignaturas,notas)
{
    this.nombre = nombre;
    this.asignaturas = asignaturas;
    this.notas = notas;
}



//objeto.nota(asig) 
//método de Alumno que pasádole la asignatura o la posición de la misma devuelve la nota
//numérico entero 0-10 o "APRO" y null si no existe la asignatura o posición
Alumno.prototype.nota = function(asign) {

    //Comprobamos si el la asignatura es un numero en es un campo texto
    var asignatura = parseInt(asign);
    var nota = null;

    
    if (!isNaN(asignatura)) {
        nota = this.notas[asign]
    }
    else
    {
        var posicionAsignatura;
        var tamAsignatura = this.asignaturas.length;
        for (let i = 0; i < tamAsignatura; i++) {
            if (this.asignaturas[i].localeCompare(asign) == 0)
            {
                posicionAsignatura = i;
            }
        }
        nota = this.nota[posicionAsignatura];
    }
    return nota
}


//objeto.setNota(asig,nota)
//método de Alumno que pasádole la asignatura o la posición de la misma y un valor entre 0 y 10 modifica la nota
Alumno.prototype.setNota = function(asign, nota) {

    //Comprobamos si el la asignatura es un numero en es un campo texto
    var asignatura = parseInt(asign);

    if (!isNaN(asignatura)) {
        this.notas[asign] = nota;
    }
    else
    {
        var posicionAsignatura;
        var tamAsignatura = this.asignaturas.length;
        for (let i = 0; i < tamAsignatura; i++) {
            if (this.asignaturas[i].localeCompare(asign) == 0)
            {
                posicionAsignatura = i;
            }
        }
        this.notas[posicionAsignatura] = nota;
    }
}