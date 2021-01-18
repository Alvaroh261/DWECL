window.addEventListener("load", function()
{

    var todoRCFanquicia = document.getElementById("todoRCFanquicia");
    todoRCFanquicia.nextElementSibling.nextElementSibling.disabled = true;
    todoRCFanquicia.addEventListener("change", function(){
        if(todoRCFanquicia.checked)
        {
            this.nextElementSibling.nextElementSibling.disabled = false;
            checkbox_terceros.style.display = "none";
        }
    })

    var todoRSFanquicia = document.getElementById("todoRSFanquicia");
    todoRSFanquicia.addEventListener("change", function(){
        if(todoRSFanquicia.checked)
        {
            todoRCFanquicia.nextElementSibling.nextElementSibling.disabled = true;
            checkbox_terceros.style.display = "none";
        }
    })

    var terceros = document.getElementById("terceros");
    checkbox_terceros.style.display = "none";
    terceros.addEventListener("change", function(){
        if(terceros.checked)
        {
            checkbox_terceros.style.display = "inline";
            todoRCFanquicia.nextElementSibling.nextElementSibling.disabled = true;
            
        }
    })




    var seguro = document.getElementById("cuerpo");
    var preguntas = seguro.getElementsByClassName("pregunta");
    var tamPreguntas = preguntas.length;

    /*=======================Ocultar las preguntas=======================*/
    for(let i = 1; i < tamPreguntas; i++)
    {
        toggle("oculto", preguntas[i]);
    }
    /*=======================Ocultar las preguntas=======================*/


    var botonSig = document.getElementById("boton-siguiente");
    var botonAnt = document.getElementById("boton-anterior");
    var botonEnv = document.getElementById("boton-enviar");
    botonAnt.disabled = true;
    botonEnv.disabled = true;

    
    
    

    /*=======================Evento Boton Siguiente=======================*/
    botonSig.addEventListener("click", function() {

        var nombrePersona = document.getElementById("nombre");
        nombrePersona.required = true;
        //Falta lo de genero
        var genero = document.querySelectorAll(".genero");
        var dni = document.getElementById("dni");
        var comproDNI = validateDNI(dni.value);
        var cumpleanio = document.getElementById("cumpleanio");


        var matricula = document.getElementById("matricula");
        var comproMatricula = validateMatricula(matricula.value);

        console.log(comproMatricula);
        
        var marca = document.getElementById("marca");
        var modelo = document.getElementById("modelo");
        var matriculacion = document.getElementById("matriculacion");


        //La pregunta que no esta oculta, en la que me encuentro ahora
        var ahoraComprobar = this.parentNode.querySelector(".pregunta:not(.oculto)").id;
        var correctorDiv = false;

        if(ahoraComprobar == "pregunta1")
        {
            if(!comproDNI || nombrePersona.value == "" || cumpleanio.value == "")
            {
                if(!comproDNI)
                    dni.style.backgroundColor = "#ff8080";
                else
                    dni.style.backgroundColor = "";

                if(nombrePersona.value == "")
                    nombrePersona.style.backgroundColor = "#ff8080";
                else
                    nombrePersona.style.backgroundColor = "";

                if(cumpleanio.value == "")
                    cumpleanio.style.backgroundColor = "#ff8080";
                else
                    cumpleanio.style.backgroundColor = "";
            }
            else
            {
                correctorDiv = true
            }
        }

        if(ahoraComprobar == "pregunta2")
        {
            if(comproMatricula == false || modelo.value == "" || matriculacion.value == "")
            {
                if(!comproMatricula)
                    matricula.style.backgroundColor = "#ff8080";
                else
                    matricula.style.backgroundColor = "";
                
                if(modelo.value == "")
                    modelo.style.backgroundColor = "#ff8080";
                else
                    modelo.style.backgroundColor = "";

                if(matriculacion.value == "")
                    matriculacion.style.backgroundColor = "#ff8080";
                else
                    matriculacion.style.backgroundColor = "";
            }
            else
            {
                correctorDiv = true
            }
        }

        if(correctorDiv)
        {
            dni.style.backgroundColor = "";
            nombrePersona.style.backgroundColor = "";
            cumpleanio.style.backgroundColor = "";

            modelo.style.backgroundColor = "";
            matriculacion.style.backgroundColor = "";
            matricula.style.backgroundColor = "";
            marca.style.backgroundColor = "";

            //La pregunta que no esta oculta, en la que me encuentro ahora
            var ahora = this.parentNode.querySelector(".pregunta:not(.oculto)");

            //El siguiene hermano de quien no esta oculto
            var next = ahora.nextElementSibling;

            var final = next.nextElementSibling.getAttribute("class", this.contains);
            if(next)
            {
                toggle("oculto", ahora);
                toggle("oculto", next);
                botonAnt.disabled = false;

                if(final == null)
                {
                    botonSig.disabled = true;
                    botonEnv.disabled = false;
                }
            }
        }
    })
    /*=======================Evento Boton Siguiente=======================*/

    /*=======================Evento Boton Anterior=======================*/
    botonAnt.addEventListener("click", function(){
        var ahora = this.parentNode.querySelector(".pregunta:not(.oculto)");
        var prev = ahora.previousElementSibling;
        var inicial = prev.previousElementSibling;

        if(prev)
        {
            toggle("oculto", ahora);
            toggle("oculto", prev);
            botonSig.disabled = false;
            botonEnv.disabled = true;

            if(inicial == null)
            {
                botonAnt.disabled = true;
                
            }
        }
    })






    /*=======================Funcion toggle=======================*/
    /*
    Funcion que añade una propiedad a la clase o se la quina
    */
   function toggle(clase, objeto)
   {
       var clasesActuales = objeto.getAttribute("class");

       if(!clasesActuales)
       {
           nuevaClase = clase;
       }
       else
       {
           var expReg = new RegExp("(^"+clase+"$|^"+clase+" | "+clase+" | "+clase+"$)");
           var nuevaClase = clasesActuales.replace(expReg, "")

           if(clasesActuales == nuevaClase)
           {
               nuevaClase+=" "+clase;
           }
       }
       objeto.setAttribute("class",nuevaClase);
   }
   /*=======================Funcion toggle=======================*/

})


// Comprueba si es un DNI correcto (entre 5 y 8 letras seguidas de la letra que corresponda).
// Acepta NIEs (Extranjeros con X, Y o Z al principio)
function validateDNI(dni) {
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            //alert('Dni correcto');
            return true;
        }
    }else{
        //alert('Dni erroneo, formato no válido');
        return false;
    }
}

// Comprueba si es un DNI correcto (entre 5 y 8 letras seguidas de la letra que corresponda).
// Acepta NIEs (Extranjeros con X, Y o Z al principio)
function validateMatricula(matricula) {
    
    var expresion_regular_matricula = /^(\d|[^AEILÑOQUaeilñoqu])(\d|\-)(\d{2})( |\d)(\d|[^AEILÑOQUaeilñoqu])([^AEILÑOQUaeilñoqu]|\-)[^AEILÑOQUaeilñoqu](|[^AEILÑOQUaeilñoqu])$/ig;
    var comprobar = expresion_regular_matricula.test(matricula)
    
    return comprobar;
}