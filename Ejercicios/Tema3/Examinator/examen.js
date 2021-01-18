window.addEventListener("load",function(){


    /*=======================Cuenta Atras=======================*/
    var tiempoExam = document.getElementById("crono");;
    var partes = tiempoExam.innerHTML.split(":");

    //Fecha de inicio de examen
    var ti = examenInicioUsuario.split(/[- :]/);
    var inicio = new Date(ti[0], ti[1]-1, ti[2], ti[3], ti[4], ti[5]);


    //fecha de fin de examen que viene de la tabla examen
    var tf = examenProgramadoFin.split(/[- :]/);
    var finExamen = new Date(tf[0], tf[1]-1, tf[2], tf[3], tf[4], tf[5]);
 
    //fecha de fin de examen que la calcula yo
    var finCalculado = new Date(ti[0], ti[1]-1, ti[2], ti[3], ti[4], ti[5]);

    finCalculado.setUTCHours(inicio.getUTCHours()+(partes[0]-0));
    finCalculado.setUTCMinutes(inicio.getUTCMinutes()+(partes[1]-0));
    finCalculado.setUTCSeconds(inicio.getUTCSeconds()+(partes[2]-0));

    if(finCalculado > finExamen)
    {
        var fin = finExamen;
    }
    else
    {
        var fin = finCalculado;
    }
    
    function cuentaAtras()
    {
        var diff = fin-new Date();
        var convert = new Date(diff);
        var actual = convert.getUTCHours()+":"+convert.getUTCMinutes()+":"+convert.getUTCSeconds();
        if(actual != "0:0:0")
        {
            tiempoExam.innerHTML = actual;
            setTimeout(cuentaAtras,1000);
        }
        else
        {
            alert("El tiempo ha terminado, examen finalizado");
            var finalizar = document.getElementById("boton-finalizar");
            finalizar.click();
        }
    }
    setTimeout(cuentaAtras,1000);
    /*=======================Cuenta Atras=======================*/


    var examen = document.getElementById("cuerpo");
    var preguntas = examen.getElementsByClassName("pregunta");

    console.log(preguntas);
    var tamPreguntas = preguntas.length;
    console.log(tamPreguntas);

    /*=======================Ocultar las preguntas=======================*/
    for(let i = 1; i < tamPreguntas; i++)
    {
        toggle("oculto", preguntas[i]);
        console.log(preguntas[i]);
    }
    /*=======================Ocultar las preguntas=======================*/
    
    var botonSig = document.getElementById("boton-siguiente");
    var botonAnt = document.getElementById("boton-anterior");
    botonAnt.style.visibility = "hidden";

    /*=======================Evento Boton Siguiente=======================*/
    botonSig.addEventListener("click", function(){

        //La pregunta que no esta oculta, en la que me encuentro ahora
        var ahora = this.parentNode.parentNode.querySelector(".pregunta:not(.oculto)");

        //El siguiene hermano de quien no esta oculto
        var next = ahora.nextElementSibling;

        var final = next.nextElementSibling.getAttribute("class", this.contains);

        var preActual = parseInt(document.getElementById("preguntaAtual").value);
        document.getElementById("preguntaAtual").value = preActual+1;

        if(next)
        {
            toggle("oculto", ahora);
            toggle("oculto", next);
            botonAnt.style.visibility = "visible";

            if(final == null)
            {
                botonSig.style.visibility = "hidden";
            }
        }
    })
    /*=======================Evento Boton Siguiente=======================*/

    /*=======================Evento Boton Anterior=======================*/
    botonAnt.addEventListener("click", function(){
        var ahora = this.parentNode.parentNode.querySelector(".pregunta:not(.oculto)");
        var prev = ahora.previousElementSibling;
        var inicial = prev.previousElementSibling;

        var preActual = parseInt(document.getElementById("preguntaAtual").value);
        document.getElementById("preguntaAtual").value = preActual-1;

        if(prev)
        {
            toggle("oculto", ahora);
            toggle("oculto", prev);
            botonSig.style.visibility = "visible";

            if(inicial == null)
            {
                botonAnt.style.visibility = "hidden";
            }
        }
    })
    /*=======================Evento Boton Anterior=======================*/

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



