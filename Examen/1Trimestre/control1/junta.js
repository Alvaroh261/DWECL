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
    for (let i = 0; i < tamTbody; i++) {
        var arrayNotas = [];
        var fila = tbody.rows[i];
        var nombre = fila.cells[0].innerText;
        for (let j = 1; j < tamThead; j++) {
            arrayNotas.push(fila.cells[j].textContent)
        }
        fila.alumno = new Alumno(nombre, arrayAsig, arrayNotas)
        
    }



//Modificar el estilo para las filas pares e impares de forma que las pares el fondo sea gris claro.
    var impar = document.getElementsByClassName("cuerpo1Reducido");
    var par = document.getElementsByClassName("cuerpo2Reducido");
    var tamPar = par.length

    for(let i=0; i<tamPar; i++)
    {
        par[i].parentNode.style.background = "#D0CAC9";
    }



//Capturar dobleClick sobre las notas numéricas de forma que me permita modificarlas mediante una caja de texto.
//Al volver a pulsar dobleClick debe desaparecer la caja de texto. 

    





})