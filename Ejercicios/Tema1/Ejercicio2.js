//2.- Funcion que pasandole un dia de la semana te diga cuanto te queda para trabajar

function diasDescanso (diaSemana)
{
    var respuesta;

    switch (diaSemana)
    {
        case "lunes":
            respuesta = 1;
        break;

        case "martes":
            respuesta = 1;
        break;

        case "miercoles":
            respuesta = 1;
        break;

        case "jueves":
            respuesta = 1;
        break;

        case "viernes":
            respuesta = 3;
        break;

        case "sabado":
            respuesta = 2;
        break;

        case "domingo":
            respuesta = 1;
        break;

        default:
            respuesta = "Ese dia no existe";
    }
}