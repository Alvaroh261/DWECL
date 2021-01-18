var Empresa = {
    nombre: "",
    horaInicio: "",
    horaFin: "",
    maxTrabajadoresSimultaneos: 0,
    //Todas las personas que trabajan en la empresa, se guarda aqui cuando creo una nueva persona
    trabajadores: [],
    trabajando: [],
}

/**
 * Creamos el objeto trabajador
 * 
 * @param dni DNI del trabajador
 * @param nombre nombre del trabajdor
 * @param hConSemana Horas contratadas semanales
 */
function Trabajador(dni, nombre, hConSemana) {
    //DNI
    this.dni = dni;

    //Nombre
    this.nombre = nombre;

    //Horas contratadas semanales
    this.hConSemana = hConSemana;

    this.periodosTrabajo = [];
    this.periodosDescanso = [];
    this.comienzoT = "";
    this.comienzoD = "";
}

Trabajador.prototype.comenzarT = function() {
    this.comienzoT = new Date();
}

Trabajador.prototype.parar = function() {
    var ahora = new Date();
    this.comienzoD = ahora;
    var periodo = [];
    periodo[0] = this.comienzoT.getTime();
    periodo[1] = ahora.getTime();
    this.periodosTrabajo.push(periodo);
}


Trabajador.prototype.vuelta = function() {
    var iniDescanso = this.comienzoD;
    var finDescanso = new Date();
    var descanso = [];
    descanso[0] = iniDescanso.getTime();
    descanso[1] = finDescanso.getTime();
    this.periodosDescanso.push(descanso);
}




var arrayFila = [];
Empresa.tablaTrabajadores = function() {
    var tabla = document.getElementById("tablaTrabaja").tBodies[0];
    tabla.innerHTML="";

    //Bucle que recorre el array de trabajadores activos y lo muestra en la tabla
    for (trabajador of Empresa.trabajadores) {
        var row = tabla.insertRow(0);
        //Metemos el objeto trabajador en cada linea del tr
        row.trabajador=trabajador;

        var cell = row.insertCell(0);
        var inputDNI = document.createElement("input");
        inputDNI.type = "text";
        inputDNI.value = trabajador.dni;
        inputDNI.readOnly = true;
        cell.appendChild(inputDNI);

        cell=row.insertCell(1);
        var inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.value = trabajador.nombre;
        cell.appendChild(inputNombre);

        cell=row.insertCell(2);
        var inputHCS = document.createElement("input");
        inputHCS.type = "number";
        inputHCS.value = trabajador.hConSemana;
        cell.appendChild(inputHCS);

        
        cell=row.insertCell(3);
        cell.innerHTML = trabajador.nombre;

        cell=row.insertCell(4);
        var botModificar = document.createElement("button");
        botModificar.type = "button";
        botModificar.id = "modificar";
        botModificar.textContent = "Modificar";
        cell.appendChild(botModificar);

        var botEliminar = document.createElement("button");
        botEliminar.type = "button";
        botEliminar.id = "eliminar";
        botEliminar.textContent = "Eliminar";
        cell.appendChild(botEliminar);

        botEliminar.addEventListener("click", clickEliminar);
        botModificar.addEventListener("click", clickModificar);

        arrayFila.push(row);
    }
}

function clickEliminar() {
    var trabajador = this.parentNode.parentNode.trabajador;
    var idx = Empresa.trabajadores.indexOf(trabajador);

    if(idx >= 0) {
        Empresa.trabajadores.splice(idx,1);
        window.localStorage.setItem('empresa', JSON.stringify(Empresa));
        Empresa.tablaTrabajadores();
    }
}


function tiempoTrabjado() {
    var trabajador = this.parentNode.parentNode.trabajadorTrabjando;

    var tiempo = 0;
    if(trabajador.periodosTrabajo != null) {
        var trabajado = 0;
        for(let i=0; i<trabajador.periodosTrabajo.length; i++){
            trabajado = trabajador.periodosTrabajo[i][1] - trabajador.periodosTrabajo[i][0];
            console.log(trabajado);
        }
        
    }

    return tiempo;
}










function clickModificar() {
    var trabajador = this.parentNode.parentNode.trabajador;
    var idx = Empresa.trabajadores.indexOf(trabajador);
    if(idx >= 0) {
        Empresa.trabajadores.splice(idx,1);

        var dni = this.parentNode.parentNode.trabajador.dni;
        var nombre = this.parentNode.parentNode.children[1].firstElementChild.value;
        var hConSemana = this.parentNode.parentNode.children[2].firstElementChild.value;
        var trabajador = new Trabajador(dni, nombre, hConSemana);
        Empresa.trabajadores.push(trabajador);
        window.localStorage.setItem('empresa', JSON.stringify(Empresa));
    }
}



Empresa.tablaTrabajando = function() {
    var tabla = document.getElementById("tablaTrabajando").tBodies[0];
    tabla.innerHTML="";

    //Bucle que recorre el array de trabajadores activos y lo muestra en la tabla
    for (trabajador of Empresa.trabajando) {
        var row = tabla.insertRow(0);
        //Metemos el objeto trabajador en cada linea del tr
        row.trabajadorTrabjando=trabajador;

        var cell = row.insertCell(0);
        cell.innerHTML = trabajador.dni;

        cell=row.insertCell(1);
        cell.innerHTML = trabajador.nombre;

        cell=row.insertCell(2);
        var botDescansar = document.createElement("button");
        botDescansar.type = "button";
        botDescansar.id = "botDescansar_"+trabajador.dni;
        botDescansar.textContent = "Descansar";
        cell.appendChild(botDescansar);

        var botTerminar = document.createElement("button");
        botTerminar.type = "button";
        botTerminar.id = "botTerminar_"+trabajador.dni;
        botTerminar.textContent = "Terminar";
        cell.appendChild(botTerminar);

        botDescansar.addEventListener("click", clickDescanso);
        botTerminar.addEventListener("click", clickTerminar);
    }
}
function clickDescanso() {
    var trabajador = this.parentNode.parentNode.trabajadorTrabjando;
    var botTerminar = document.getElementById('botTerminar_'+trabajador.dni);
    this.disabled = true;
    botTerminar.disabled = true;
    trabajador.parar();
    console.log(trabajador);
    //window.localStorage.setItem('empresa', JSON.stringify(Empresa));
}
function clickTerminar() {

    var trabajador = this.parentNode.parentNode.trabajadorTrabjando;
    var idx = Empresa.trabajando.indexOf(trabajador);
    if(idx >= 0) {
        Empresa.trabajando.splice(idx,1);
        trabajador.parar();
        console.log(trabajador);
        Empresa.tablaTrabajando();
        numTrabajadoresTrabajando();
        //window.localStorage.setItem('empresa', JSON.stringify(Empresa));
    }
}












function recuperar () {
    var empresa = JSON.parse(localStorage.getItem('empresa'));

    for(let i = 0; i<empresa.trabajadores.length; i++) {
        var dni = empresa.trabajadores[i].dni
        var nombre = empresa.trabajadores[i].nombre
        var hcS = empresa.trabajadores[i].hConSemana

        var trabajador = new Trabajador(dni, nombre, hcS);
        Empresa.trabajadores.push(trabajador);
        //trabajador.comienzoT = empresa.trabajadores[i].comienzoT;
        for(let j = 0; j<empresa.trabajando.length; j++) {
            if(empresa.trabajando[j].dni === empresa.trabajadores[i].dni) {
                Empresa.trabajando.push(trabajador);
            }
        }
    }

    Empresa.nombre = empresa.nombre;
    Empresa.horaInicio = empresa.horaInicio;
    Empresa.horaFin = empresa.horaFin;
    Empresa.maxTrabajadoresSimultaneos = empresa.maxTrabajadoresSimultaneos;
}








window.addEventListener("load", function() {

    if(localStorage.getItem('empresa') == null) {
        window.localStorage.setItem('empresa', JSON.stringify(Empresa));
    } else {
        recuperar ();
    }

    var central = document.getElementById("central");
    var amdministracion = central.getElementsByClassName("admin");

    /*=======================Ocultar las preguntas=======================*/
    for(let i = 1; i < amdministracion.length; i++)
    {
        toggle("oculto", amdministracion[i]);
    }
    /*=======================Ocultar las preguntas=======================*/


    var botTrabajador = document.getElementById("adminTrabajador");
    var botEmpresa = document.getElementById("adminEmpresa");
    var botLogin = document.getElementById("adminLogin");


    
    botEmpresa.addEventListener("click", function(){
        var ahora = central.querySelector(".admin:not(.oculto)");
        var divFormEmpresa = document.getElementById("empresa");
        
        //ocultas el que se esta viendo ahora
        toggle("oculto", divFormEmpresa);
        toggle("oculto", ahora);
        
    })

    botTrabajador.addEventListener("click", function(){
        var ahora = central.querySelector(".admin:not(.oculto)");
        var divFormTrabajador = document.getElementById("trabajador");
        
        //ocultas el que se esta viendo ahora
        toggle("oculto", divFormTrabajador);
        toggle("oculto", ahora);
    })

    botLogin.addEventListener("click", function(){
        var ahora = central.querySelector(".admin:not(.oculto)");
        var login = document.getElementById("login");
        
        //ocultas el que se esta viendo ahora
        toggle("oculto", login);
        toggle("oculto", ahora);
    })


    var botInsertar = document.getElementById('insertar');
    botInsertar.addEventListener("click", function(){
        var dni = document.getElementById('dni');
        var nombre = document.getElementById('nombre');
        var hConSemana = document.getElementById('hConSemana');

        var existe = existeUsuarios(dni.value);
        if (existe) {
            alert('Existe Usuario. DNI duplicado');
        } else {
           var trabajador = new Trabajador(dni.value, nombre.value, hConSemana.value);
            Empresa.trabajadores.push(trabajador);
            window.localStorage.setItem('empresa', JSON.stringify(Empresa)); 
        }

        Empresa.tablaTrabajadores();
    })
    //setInterval(Empresa.tablaTrabajadores, 1000);
    Empresa.tablaTrabajadores();


    var botLoginEmpresa = document.getElementById('botLoginEmpresa');
    botLoginEmpresa.addEventListener("click", function(){

        var loginTrabajador = document.getElementById('loginTrabajador');
        if(Empresa.trabajando.length < Empresa.maxTrabajadoresSimultaneos)
        {
            for(let i = 0; i<Empresa.trabajadores.length; i++)
            {
                if(loginTrabajador.value == Empresa.trabajadores[i].dni)
                {
                    var idx = Empresa.trabajando.indexOf(Empresa.trabajadores[i]);
                    if(idx >= 0) {
                        var botDescansar = document.getElementById("botDescansar_"+Empresa.trabajadores[i].dni);
                        botDescansar.disabled = false;

                        var botTerminar = document.getElementById('botTerminar_'+Empresa.trabajadores[i].dni);
                        botTerminar.disabled = false;
                        Empresa.trabajadores[i].vuelta();
                        console.log(Empresa.trabajadores[i]);

                    } else {
                        Empresa.trabajando.push(Empresa.trabajadores[i]);
                        numTrabajadoresTrabajando();
                        Empresa.tablaTrabajando();
                        Empresa.trabajadores[i].comenzarT();
                        //window.localStorage.setItem('empresa', JSON.stringify(Empresa));
                        break;
                    }
                }
            }
        }
    })




    var botMoficiarEmpresa = document.getElementById('botMoficiarEmpresa');
    botMoficiarEmpresa.addEventListener("click", function(){
        var nombre = this.parentNode.children[1].value;
        var hInicio = this.parentNode.children[3].value;
        var hFin = this.parentNode.children[5].value;
        var mTSimultaneas = this.parentNode.children[7].value;

        Empresa.nombre = nombre;
        Empresa.horaInicio = hInicio;
        Empresa.horaFin = hFin;
        Empresa.maxTrabajadoresSimultaneos = mTSimultaneas;
        window.localStorage.setItem('empresa', JSON.stringify(Empresa));
    })


    var formularioEmpresa = document.getElementById('formularioEmpresa');
        formularioEmpresa.children[1].value = Empresa.nombre;
        formularioEmpresa.children[3].value = Empresa.horaInicio;
        formularioEmpresa.children[5].value = Empresa.horaFin;
        formularioEmpresa.children[7].value = Empresa.maxTrabajadoresSimultaneos;


    relojDifital();
    numTrabajadoresTrabajando();
    Empresa.tablaTrabajando();
})








































function existeUsuarios (dniNuevoUsuario) {
    var empresa = JSON.parse(localStorage.getItem('empresa'));

    var existe = false;
    var compare = 0;
    for(let i = 0; i<empresa.trabajadores.length; i++)
    {
        var dni = empresa.trabajadores[i].dni
        compare = dni.localeCompare(dniNuevoUsuario);
        if(compare == 0)
        {
            existe = true;
        }
    }
    return existe;
}




/*=======================Funcion toggle=======================*/
/*
Funcion que añade una propiedad a la clase o se la quina
*/
function toggle(clase, objeto)
{
    var clasesActuales = objeto.getAttribute("class");

    if(!clasesActuales) {
        nuevaClase = clase;
    } else {
        var expReg = new RegExp("(^"+clase+"$|^"+clase+" | "+clase+" | "+clase+"$)");
        var nuevaClase = clasesActuales.replace(expReg, "")

        if(clasesActuales == nuevaClase) {
            nuevaClase+=" "+clase;
        }
    }

    objeto.setAttribute("class",nuevaClase);
}
/*=======================Funcion toggle=======================*/





function relojDifital() {
    momentoActual = new Date()
    if(momentoActual.getHours()>=0 && momentoActual.getHours()<10) {
        var hora = "0"+momentoActual.getHours();
    } else {
        var hora = momentoActual.getHours();
    }

    if(momentoActual.getSeconds()>=0 && momentoActual.getSeconds()<10) {
        var segundo = "0"+momentoActual.getSeconds();
    } else {
        var segundo = momentoActual.getSeconds();
    }

    if(momentoActual.getMinutes()>=0 && momentoActual.getMinutes()<10) {
        var minuto = "0"+momentoActual.getMinutes();
    } else {
        var minuto = momentoActual.getMinutes();
    }

    if(momentoActual.getDate()>0 && momentoActual.getDate()<10) {
        var dia = "0"+momentoActual.getDate();
    } else {
        var dia = momentoActual.getDate();
    }

    var horaImprimible = hora + ":" + minuto + ":" + segundo
    var hoyForm = momentoActual.getFullYear()+"-"+(momentoActual.getMonth()+1)+"-"+dia;

    var ahora = document.getElementById('tiempo');
    ahora.innerText = hoyForm+ " " + horaImprimible;

    setTimeout("relojDifital()",1000)
}

function numTrabajadoresTrabajando() {
    var tamTrabajando = Empresa.trabajando.length;
    var ahoraTrabajando = document.getElementById('plazas');
    ahoraTrabajando.innerText = tamTrabajando+ "/" +Empresa.maxTrabajadoresSimultaneos;
}



/*

function ventanaModal() {
    if (document.getElementById("botOpcionesTrabajando")) {
        var modal = document.getElementById("tvesModal");
        var btn = document.getElementById("botOpcionesTrabajando");
        var span = document.getElementsByClassName("close")[0];
        var body = document.getElementsByTagName("body")[0];

        btn.onclick = function () {
            modal.style.display = "block";
            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "hidden";
        }

        span.onclick = function () {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                body.style.position = "inherit";
                body.style.height = "auto";
                body.style.overflow = "visible";
            }
        }
    }
}




var divModal = document.createElement("div");
var divModal2 = document.createElement("div");
var span = document.createElement("span");
var botDescansar = document.createElement("button");
var botTerminar = document.createElement("button");
//Modal
divModal.id = "tvesModal";
divModal.setAttribute('class', "modalContainer");
body.appendChild(divModal);

//Modal 2
divModal2.setAttribute('class', "modal-content");
divModal.appendChild(divModal2);

//Span para cerrar
span.setAttribute('class', "close");
span.innerHTML = 'x';
divModal2.appendChild(span);

//Boton Descansar
botDescansar.type = "button";
botDescansar.id = "descansar";
botDescansar.textContent = "Descansar";
divModal2.appendChild(botDescansar);

//Boton Terminar
botTerminar.type = "button";
botTerminar.id = "terminar";
botTerminar.textContent = "Terminar";
divModal2.appendChild(botTerminar);*/