/*
var Curso = {
    aula:"21B",
    descripcion: "clase",
    alumno: [],
}

function Alunmno(nombre,apellido1,apellido2,fechaNacimiento)
{
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fechaNacimiento=fechaNacimiento;
}


Curso.guardar = function()
{
    var nombre=document.getElementById("nombre").value;
    var apellido1=document.getElementById("apellido1").value;
    var apellido2=document.getElementById("apellido2").value;
    var fechaNacimiento=document.getElementById("fNacimiento").value;

    var alum = new Alunmno(nombre,apellido1,apellido2,fechaNacimiento);

    this.alumno.push(alum);
    this.mostrar();
}

Curso.eliminarAlumno=function(indAlum)
{
    this.alumno.splice(indAlum,1);
    
    this.mostrar();
}

Curso.mostrar = function()
{
    var respuesta="";
    var tbody=document.getElementById("listado");
    var numAlumnos=this.alumno.length;

    for(let i=0;i<numAlumnos;i++){
        respuesta+="<tr><td>";
        respuesta+=this.alumno[i].nombre;
        respuesta+="</td><td>";
        respuesta+=this.alumno[i].apellido1;
        respuesta+="</td><td>";
        respuesta+=this.alumno[i].apellido2;
        respuesta+="</td><td>";
        respuesta+=this.alumno[i].fechaNacimiento;
        respuesta+="</td><td>";
        respuesta+="<button onclick='Curso.eliminarAlumno("+i+");'>Eliminar</button";
        respuesta+="</td></tr>";

    }

    tbody.innerHTML=respuesta; //codigo fuente HTML de la tabla
}


window.addEventListener("load", function()
{
    var botonMatricular = document.getElementById("matricular");
    var cabeceraNombre = document.getElementById("cabeceraNombre");
    var cabecara1Apell = document.getElementById("cabecara1Apell");
    var cabecara2Apell = document.getElementById("cabecara2Apell");
    var cabeceraFNacimiento = document.getElementById("cabeceraFNacimiento");

    botonMatricular.onclick=function()
    {
        Curso.guardar();
    }

    cabeceraNombre.onclick=function()
    {
        Curso.alumnos.sort(function(a,b)
        {
            return a.nombre.localeCompare(b.nombre);
        });
        Curso.almacenar();
        Curso.mostrar();
    }
    cabecara1Apell.onclick=function()
    {
        Curso.alumnos.sort(function(a,b)
        {
            return a.ape1.localeCompare(b.ape1);
        });
        Curso.mostrar();
    }
    cabecara2Apell.onclick=function()
    {
        Curso.alumnos.sort(function(a,b)
        {
            
            return a.ape2.localeCompare(b.ape2);
        });
        Curso.mostrar();
    }
    cabeceraFNacimiento.onclick=function()
    {
        Curso.alumnos.sort(function(a,b)
        {
            
            return a.fechaNac.localeCompare(b.fechaNac);
        });
        Curso.mostrar();
    }






   /* cabeceraNombre.onclick=function()
    {
        alert("Ordenado por Nombre");
    }

    cabecara1Apell.onclick=function()
    {
        alert("Ordenado por Primer Apellido");
    }

    cabecara2Apell.onclick=function()
    {
        alert("Ordenado por Segundo Apellido");
    }

    cabeceraFNacimiento.onclick=function()
    {
        alert("Ordenado por Fecha de Nacimiento");
    }

    Curso.mostrar();
});
*/




var Curso={
    nombre:"IES LAS FUENTEZUELAS",
    clase:"",
    alumnos:[],
}
Curso.almacenar=function(){
    var cadenaJSON;
    cadenaJSON=JSON.stringify(this);
    localStorage.setItem("datosCurso",cadenaJSON);
}
Curso.recuperar=function()
{
    var cadena= localStorage.getItem("datosCurso");
    if(cadena)
    {
        var obj=JSON.parse(cadena);
        this.nombre=obj.nombre;
        this.clase=obj.clase;
        var numAlumnos=obj.alumnos.length;
        for(let i=0;i<numAlumnos;i++)
        {
            this.matricular(new Alumno(obj.alumnos[i].nombre,
                                        obj.alumnos[i].ape1,
                                        obj.alumnos[i].ape2,
                                        obj.alumnos[i].fechaNac))
        }
    }
}
function Alumno(nombre,ape1,ape2,fechaNac)
{
    this.nombre=nombre;
    this.ape1=ape1;
    this.ape2=ape2;
    this.fechaNac=fechaNac;
}

Curso.matricular=function(alumno)
{
    this.alumnos.push(alumno);
    this.mostrar();
}

Curso.desmatricular=function(indAlumno)
{
    this.alumnos.splice(indAlumno,1);
    this.mostrar();
}

Curso.mostrar=function()
{
    var respuesta="";
    var tbody=document.getElementById("listado");
    var numAlumnos=this.alumnos.length;
    for(let i=0;i<numAlumnos;i++){
        respuesta+="<tr><td>";
        respuesta+=this.alumnos[i].nombre;
        respuesta+="</td><td>";
        respuesta+=this.alumnos[i].ape1;
        respuesta+="</td><td>";
        respuesta+=this.alumnos[i].ape2;
        respuesta+="</td><td>";
        respuesta+=this.alumnos[i].fechaNac;
        respuesta+="</td><td>";
        respuesta+="<button onclick='Curso.desmatricular("+i+");Curso.almacenar()'>Borrar</button";
        respuesta+="</td></tr>";
        
        
    }
    tbody.innerHTML=respuesta; //codigo fuente HTML de la tabla
}


window.addEventListener("load",function()
{
    var botMatri=document.getElementById("matricular");
    botMatri.addEventListener("click", function(){
        var nombre=document.getElementById("nombre").value;
        var ape1=document.getElementById("apellido1").value;
        var ape2=document.getElementById("apellido2").value;
        var fechaNac=document.getElementById("fNacimiento").value;
        
        Curso.matricular(new Alumno(nombre,ape1,ape2,fechaNac));
        Curso.almacenar();
    })
        
        cabeceraNombre.onclick=function()
        { 
            Curso.alumnos.sort(function(a,b)
            {
                return a.nombre.localeCompare(b.nombre);
            });
            almaMos();
        }
        cabecara1Apell.onclick=function()
        {
            Curso.alumnos.sort(function(a,b)
            {
                return a.ape1.localeCompare(b.ape1);
            });
            almaMos();
        }
        cabecara2Apell.onclick=function()
        {
            Curso.alumnos.sort(function(a,b)
            {
                return a.ape2.localeCompare(b.ape2);
            });
            almaMos();
        }
        cabeceraFNacimiento.onclick=function()
        {
            Curso.alumnos.sort(function(a,b)
            {
                return a.fechaNac.localeCompare(b.fechaNac);
            });
            almaMos();
        }
    Curso.recuperar();
    Curso.mostrar();
})


function almaMos()
{
    Curso.almacenar();
    Curso.mostrar();
}