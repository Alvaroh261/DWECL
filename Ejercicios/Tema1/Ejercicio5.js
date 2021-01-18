//5.- Funcion que pasandole una letra te diga cuantas hay en el texto

function contarLetras(letra, texto)
{
    var contador = 0;

    for(let i = 0; i<texto.length;i++)
    {
        if (texto[i] == letra)
        contador++;
    }
    return contador;
}