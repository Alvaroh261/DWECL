/*function grabar ()
{
    var nombre = document.getElementById("nombre").value;
    document.getElementById("resultado").innerHTML=texto;
}*/

var listadoOriginal = [];
var listadoOrdenado = [];

function grabar()
{
    var nombre = document.getElementById("nombre").value;
    listadoOriginal.push(nombre);
    listadoOrdenado.push(nombre);
    imprimir(listadoOriginal);
}

function imprimir(vector)
{
    document.getElementById("listado").innerHTML=
        vector.join("<br/>");
}

