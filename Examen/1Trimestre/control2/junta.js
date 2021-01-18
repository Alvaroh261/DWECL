/*Online
Alvaro Hernandez Martinez
Curso 2020/21
*/

window.addEventListener("load", function(){

    var tabla = document.getElementsByClassName("TableData");
    var tbody = tabla[0].children[1];
    var thead = tabla[0].children[0].rows[0].cells;
    var tamThead = thead.length
    
    //Una vez termine de cargar la página crear un vector con los nombres de las asignaturas.
    //Recorrer las filas del tbody creando lo objetos Alumno y guardarlos como propiedad de la propia fila
    //fila.alumno
    var arrayAsig = [];
    for (let i = 1; i < tamThead; i++) {
        arrayAsig.push(thead[i].innerText)
    }

    var tamTbody = tbody.rows.length;
    



//Modificar el estilo para las filas pares e impares de forma que las pares el fondo sea gris claro.
    var par = document.getElementsByClassName("cuerpo2Reducido");
    var tamPar = par.length

    for(let i=0; i<tamPar; i++)
    {
        par[i].parentNode.style.background = "#D0CAC9";
    }



//Capturar dobleClick sobre las notas numéricas de forma que me permita modificarlas mediante una caja de texto.
//Al volver a pulsar dobleClick debe desaparecer la caja de texto. 

    var row = tabla[0].children[0].firstElementChild;
    row.insertCell(1).innerHTML = "Media";
    row.insertCell(2).innerHTML = "Suspensas";

    var cabecera = tabla[0].children[0];
    cabecera.insertRow();
    console.log(cabecera);

    var ultimaCabecera = tabla[0].children[0].lastElementChild;
    ultimaCabecera.insertCell(0).innerHTML = "% Aprobados";

    for (let i = 0; i < tamTbody; i++) {
        
        tabla[0].children[1].children[i].insertCell(1);
        tabla[0].children[1].children[i].insertCell(2);
    }

    for (let i = 0; i < tamTbody; i++) {
        var fila = tabla[0].children[1].children[i];
        var celdas = fila.cells;
        var numeroAsignaturas = 0;
        var nota = 0;
        for (let j = 3; j < tamThead; j++) {
            var texto = celdas[j].innerText;
            var transfor = parseInt(texto)
            if (!isNaN(transfor)) {
                nota = nota + transfor;
                numeroAsignaturas++;
            }
        }

        fila.cells[1].innerText = nota / numeroAsignaturas;
    }

    for (let i = 0; i < tamTbody; i++) {
        var fila = tabla[0].children[1].children[i];
        var celdas = fila.cells;
        var numeroAsignaturas = 0;
        for (let j = 3; j < tamThead; j++) {
            var texto = celdas[j].innerText;
            var transfor = parseInt(texto)
            if (!isNaN(transfor) && transfor<5) {
                
                numeroAsignaturas++;
            }
        }

        fila.cells[2].innerText = numeroAsignaturas;
    }


    



})


