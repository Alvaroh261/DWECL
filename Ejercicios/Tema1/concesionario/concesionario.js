/*realizar un aplicativo para el mantenimiento de un concesionario 

    objeto Coche
        modelo,color,marca,matricula,anioMatriculacion,precio
    objeto Concesionario
        nombre,cif, stock(array de coches)

    Comprar Coche
    Vender Coche
    Pintar Coche
    Rematricular Coche

    Todo el funcionamiento se hará mediante una página web.

*/

var Concesionario={
    nombre:"Barato Barato",
    cif:"H-1111111H",
    stock:[],
}

Concesionario.mostrar = function()
{
    var respuesta="";
    var tbody=document.getElementById("stock");
    var numCoches=this.stock.length;
    for(let i=0;i<numCoches;i++){
        respuesta+="<tr><td>";
        respuesta+=this.stock[i].matricula;
        respuesta+="</td><td>";
        respuesta+=this.stock[i].marca;
        respuesta+="</td><td>";
        respuesta+=this.stock[i].modelo;
        respuesta+="</td><td>";
        respuesta+=this.stock[i].color;
        respuesta+="</td><td>";
        respuesta+=this.stock[i].anioMat;
        respuesta+="</td><td>";
        respuesta+=this.stock[i].precio;
        respuesta+="</td><td>";
        respuesta+="<button onclick='Concesionario.vender("+i+");Concesionario.almacenar()'>Comprar</button";
        respuesta+="</td></tr>";
        
        
    }
    tbody.innerHTML=respuesta; //codigo fuente HTML de la tabla
}

Concesionario.comprar=function(coche)
{
    this.stock.push(coche);
    this.mostrar();
}

Concesionario.vender=function(indCoche)
{ //indice coche
    this.stock.splice(indCoche,1);
    
    this.mostrar();
}
Concesionario.almacenar=function(){
    var cadenaJSON;
    cadenaJSON=JSON.stringify(this);
    localStorage.setItem("datos",cadenaJSON);
}
Concesionario.recuperar=function()
{
    var cadena= localStorage.getItem("datos");
    if(cadena)
    {
        var obj=JSON.parse(cadena);
        this.nombre=obj.nombre;
        this.cif=obj.cif;
        this.stock=[];
        var numCoches=obj.stock.length;
        for(let i=0;i<numCoches;i++)
        {
            this.comprar(new Coche(obj.stock[i].matricula,
                                   obj.stock[i].modelo,
                                   obj.stock[i].marca,
                                   obj.stock[i].color,
                                   obj.stock[i].anioMat,
                                   obj.stock[i].precio))
        }
    }
}


function Coche(matricula,marca,modelo,color,anioMat,precio)
{
    this.matricula=matricula;
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anioMat=anioMat;
    this.precio=precio;
    this.pintar=function(color){
        this.color=color;
    }

    this.rematricular=function(mat){
        this.matricula=mat;
    }
}

function guardar(){
    var matricula=document.getElementById("mat").value;
    var marca=document.getElementById("mar").value;
    var modelo=document.getElementById("mod").value;
    var color=document.getElementById("color").value;
    var anio=document.getElementById("aniomat").value;
    var precio=document.getElementById("precio").value;

    Concesionario.comprar(new Coche(matricula,marca,modelo,color,anio,precio));
    
   
}



window.addEventListener("load",function(){
    var c1=new Coche("GR-2859-AW","Peugeot","306","Verde metalizado",1996,10000);
    Concesionario.comprar(c1);
    Concesionario.comprar(new Coche("999DDD","Seat","Toledo","Gris",2005,15000));
    Concesionario.comprar(new Coche("666JJJ","BMW","X5","Negro",2015,40000));
    Concesionario.recuperar();
    Concesionario.mostrar();
})
