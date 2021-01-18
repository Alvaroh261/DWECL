//4.- Funcion que pasandole un numero imprime esa tabla de multiplicar

function tablaMultiplicar(numero)
{
    document.write("<h2>Tabla de multiplicar del "+ numero +"</h2>");

	var respuesta = "<table><tbody>"
	var linea;

	for(i = 1;i<=10;i++)
	{
		linea = "<tr><td>" + numero + " x " + i + " = " + numero * i +"</li>";

		respuesta+=linea;
	}

	respuesta+="</ul>";

	return respuesta;
}




function multiplicarWhile(numero)
{
    var i = 0;
    document.write("<h2>Tabla de multiplicar del "+ numero +"</h2>");

	document.write("<ul>");

    while(i <=10)
    {
        document.write("<li>");
		document.write(numero + " x " + i + " = " + numero * i);
		document.write("</li>");
		i++;
    }
	document.write("</ul>");
}