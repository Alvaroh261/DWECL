var Empresa = {
    nombre: "Empresa",
    //Todas las personas que trabajan en la empresa, se guarda aqui cuando creo una nueva persona
    trabajadores: [],

    //Son los trabajadores que estan trabajando actualmente
    trabajando: [],

    //Son los trabajadores que ya han terminado su jornada lavoral
    finJornada: []
    
}


/*Creamos el objeto trabajador*/
function Trabajador(dni) {
    
    //DNI
    this.dni = dni;

    //Tiempo trabajo en milisegundos
    this.tTrabaMs = 0;

    //Tiempo de Trabajo
    this.temporizador = 0;

    this.crono = 0;

    //Cuando empizar a trabajar el trabajador 
    this.horaInicio = new Date();

    //Cuando vuelvo a comenzar
    this.ultComienzo = this.horaInicio;
}

/*Metodo que calcula un tiempo entre dos fechas*/
Trabajador.prototype.tiempoTrabajado = function() {
    var ahora = new Date();
    //Resta la hora actual menos la hora del comienzo del objeto trabajador
    var tiempoMs = ahora.getTime() - this.ultComienzo.getTime();
    var tTrabajado = new Date(this.tTrabaMs + tiempoMs);
    return d2(tTrabajado.getUTCHours()) + ":" +
        d2(tTrabajado.getUTCMinutes()) + ":" +
        d2(tTrabajado.getUTCSeconds());
}

function d2(numero) {
    return ((numero < 10) ? "0" : "") + numero;
}

var botDescansar = document.createElement("button");
botDescansar.type = "button";
botDescansar.id = "descargar";
botDescansar.textContent = "Descarsar";
        
var botParar = document.createElement("button");
botParar.type = "button";
botParar.id = "parar";
botParar.textContent = "Parar";

/*Metodo que muestra los trabajdores que estan trabajando actualmente*/
Empresa.movTrabajadores = function() {
    var tablaActivos = document.getElementById("tablaActivos").tBodies[0];
    tablaActivos.innerHTML="";

    //Bucle que recorre el array de trabajadores activos y lo muestra en la tabla
    for (trabajador of Empresa.trabajando) {
        var row = tablaActivos.insertRow(0);
        row.trabajador=trabajador;

        var cell = row.insertCell(0);
        cell.innerHTML = trabajador.dni;

        var comienzo = trabajador.horaInicio.getDate()+"/"+(trabajador.horaInicio.getMonth()+1)+"/"+
        trabajador.horaInicio.getFullYear()+" "+trabajador.horaInicio.getHours()
        +":"+trabajador.horaInicio.getMinutes()+":"+trabajador.horaInicio.getSeconds();
        cell=row.insertCell(1);
        cell.innerHTML = comienzo;

        cell=row.insertCell(2);
        cell.innerHTML = trabajador.tiempoTrabajado();

        if(botDescansar.textContent == "Seguir")
        {
            cell.innerHTML = trabajador.temporizador;
        }
        else if(botDescansar.textContent == "Descarsar")
        {
            cell.innerHTML = trabajador.tiempoTrabajado();
        }

        cell=row.insertCell(3);
        cell.appendChild(botDescansar);
        cell.appendChild(botParar);

        botDescansar.addEventListener("click", clickDescansar);
        botParar.addEventListener("click", clickParar);
    }
}





function clickParar() {
    var trabajador = this.parentElement.parentElement.trabajador;
    var i = Empresa.trabajando.indexOf(trabajador);

    trabajador.temporizador = trabajador.tiempoTrabajado();

    if(i>-1)
    {
        Empresa.trabajando.splice(i,1);
    }
    Empresa.finJornada.push(trabajador);
}

function clickDescansar() {
    var trabajador = this.parentElement.parentElement.trabajador;
    trabajador.temporizador = trabajador.tiempoTrabajado();

    if(this.textContent == "Seguir")
    {
        this.textContent = "Descarsar"
    }
    else if(this.textContent == "Descarsar")
    {
        this.textContent = "Seguir"
    }
}


/*Metodo que muestra los trabajdores que han terminado su jornada laboral*/
Empresa.finTrabajadores = function() {
    var tablaNoActivos = document.getElementById("tablaNoActivos").tBodies[0];
    tablaNoActivos.innerHTML="";

    //Bucle que recorre el array de trabajadores que no estan activos y lo muestra en la tabla
    for (trabajador of Empresa.finJornada) {
        var row = tablaNoActivos.insertRow(0);
        row.trabajador=trabajador;

        var cell = row.insertCell(0);
        cell.innerHTML = trabajador.dni;

        var comienzo = trabajador.horaInicio.getDate()+"/"+trabajador.horaInicio.getMonth()+1+"/"+
        trabajador.horaInicio.getFullYear()+" "+trabajador.horaInicio.getHours()
        +":"+trabajador.horaInicio.getMinutes()+":"+trabajador.horaInicio.getSeconds();
        cell=row.insertCell(1);
        cell.innerHTML = comienzo;

        cell=row.insertCell(2);
        cell.innerHTML = trabajador.temporizador;
    }
}


window.addEventListener("load", function() {

    var botFichar = document.getElementById("fichar");

    botFichar.addEventListener("click", function() {

        var trabaja = new Trabajador(this.previousElementSibling.value);

        //Añado a un trabajador al array de trabajadres totales
        Empresa.trabajadores.push(trabaja);

        //Añado a un trabajador al array de los que estan trabajando
        Empresa.trabajando.push(trabaja);

        Empresa.movTrabajadores();


    });


    /*Actualizo la tabla de trabajadores activos cada segundo, no actualizo el valor del tiempo, 
    si no toda la tabla*/
    setInterval(Empresa.movTrabajadores, 1000);
    setInterval(Empresa.finTrabajadores, 1000);

});