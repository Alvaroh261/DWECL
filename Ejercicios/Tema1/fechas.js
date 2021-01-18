//1.- funcion que pasandole una cadena formato español dd/mm/yyyy deuelva true si la fecha es valida
function validarFechaString()
{
    var fecha = document.getElementById("data").value;
    
    var formatFecha = fecha.split("/");

    var date = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);

    if(isNaN(date))
    {
        alert("Fecha no correcta");
    }
    else
    {
        alert("Fecha correcta");
        alert(date);
    }
}


//2.- funcion que pasandole una fecha de nacimiento cuente los dias que llevamos vivos
function contarDiasVivos()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fechaNaci = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]).getTime();
    var fechaHoy = new Date().getTime();

    var diff = fechaHoy - fechaNaci;

    var dias = diff/(1000*60*60*24);
    alert(Math.floor(dias));
}


//3.- que pasandole una fecha devuelve el dia de la semana
function diaSemana()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");
    var fechaHoy = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var semana = fechaHoy.getDay();

    switch(semana)
    {
        case 0:
            alert("Domingo");
        break;

        case 1:
            alert("Lunes");
        break;

        case 2:
            alert("Martes");
        break;

        case 3:
            alert("Miercoles");
        break;

        case 4:
            alert("Jueves");
        break;

        case 5:
            alert("Viernes");
        break;

        case 6:
            alert("Sabado");
        break;
    }
}



//4.- funcion que pasandole dos fechas devuelve 1 si la primera es porterior, 0 si son la misma y -1 si es anterior
function fechaMayorMenorIgual()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");
    var fecha = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var fechaHoy = new Date();

    if(fecha > fechaHoy)
    {
        alert("1");
    }
    else if(fechaHoy > fecha)
    {
        alert("-1");
    }
    else if(fecha == fechaHoy)
    {
        alert("0");
    }
}



//5.- funcion que me diga si me puedo tomar un cubata
function tomarCubatas()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fechaNaci = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var fecha18 = fechaNaci;
    
    fecha18.setFullYear(fechaNaci.getFullYear()+18);

    var fechaHoy = new Date();

    if(fecha18<fechaHoy)
    {
        alert("tu ya puedes tomar cubatas");
    }
    else 
    {
        alert("eres muy chico para tomar cubatas");
    }
}



//6.- funcion que me diga cuantos dias tengo que esperar para tomarme el cubata
function tomarCubatasFaltanDias()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fechaNaci = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]).getTime();
    var fechaHoy = new Date().getTime();

    var diff = fechaNaci - fechaHoy;

    var dias = diff/(1000*60*60*24);

    if(dias>0)
    {
        alert("te quedan "+Math.floor(dias)+" dias para tener 18");
    }
    else 
    {
        alert("ya tienes mas 18 años");
    }
}


//7.- fecha de jubilacion (67 años)
function cuandoMeJubilo()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fechaNaci = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var fecha67 = fechaNaci;
    
    fecha67.setFullYear(fechaNaci.getFullYear()+67);

    var fechaHoy = new Date();

    if(fecha67<fechaHoy)
    {
        alert("jubilate ya, que ya esta bien");
    }
    else 
    {
        alert("todavia te queda tiempo para jubilarte");
    }
}


//8.- funcion que diga los años, meses y dias para jubilarme
function calculateJubilacionDate()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fechaNaci = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var fecha67 = fechaNaci;
    
    fecha67.setFullYear(fechaNaci.getFullYear()+67);

    var fechaHoy = new Date();

    if(fecha67<fechaHoy)
    {
        alert("jubilate ya, que ya esta bien "+fecha67);
    }
    else 
    {
        alert("todavia te queda tiempo para jubilarte "+fecha67);
    }
}



//9.- funcion que cuente los jueves que llevo vivos
function juevesVivo()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fechaNaci = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var fechaHoy = new Date();

    var contador = 0
    while(fechaNaci<=fechaHoy)
    {
        if(fechaNaci.getDay() === 0)
        {
            contador ++;
        }

        fechaNaci.setDate(fechaNaci.getDate()+1)
    }
    alert(contador+" jueves llevo vivo");
}

//10.- funcion que coja las fechas de un textArea y las ordene
function ordenar()
{
    alert("No esta creada todavia la funcion");
}


//11.- funcion que valide si una hora es valida o no
function validateHours()
{
    alert("No esta creada todavia la funcion");
}



//12.- funcion que valide los minutos que me quedan para ver a mi pareja
function validateMinutes()
{
    var fecha = document.getElementById("data").value;
    var formatFecha = fecha.split("/");

    var fecha = new Date(formatFecha[2], formatFecha[1]-1, formatFecha[0]);
    var fechaHoy = new Date();

    var diff = fecha.getTime() - fechaHoy.getTime()
    
    if(diff>0)
    {
        alert(Math.round(diff/ (1000*60)));
    }
    else
    {
        alert("LLegas Tarde");
    }
}
