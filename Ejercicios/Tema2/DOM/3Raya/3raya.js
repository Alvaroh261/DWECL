/**/


window.addEventListener("load",function(){
    function victoria(piezas)
    {
        var victoria = false;

        //Filas
        for(let i = 0; i<3; i++)
        {
            if(piezas[i][0] != "" && piezas[i][0] == piezas[i][1] && piezas[i][0]== piezas[i][2])
                victoria = true;
        }

        for(let i = 0; i<3; i++)
        {
            if(piezas[i][0] != "" && piezas[0][1] == piezas[1][i] && piezas[0][1]== piezas[2][i])
                victoria = true;
        }

        if(piezas[1][1] != "" && piezas[0][0] == piezas[1][1] && piezas[0][0]== piezas[2][2])
            victoria = true;

        if(piezas[1][1]  != "" && piezas[0][2] == piezas[1][1]  && piezas[0][2]== piezas[2][0])
            victoria = true;

        return victoria;
    }


    var tds = document.getElementsByTagName("td");
    var piezas = [["","",""],["","",""],["","",""]];

    for(let i = 0; i<tds.length; i++)
    {
        tds[i].fila = parseInt(i/3);
        tds[i].columna = i%3;
        tds[i].addEventListener("click", function(){

        if(this.innerHTML=="")
        {
            this.innerHTML="X";
            piezas[this.fila][this.columna]="X";

            if(victoria(piezas))
            {
                alert("Gana Humano");
            }
            else
            {
                var posibilidades = document.querySelectorAll("td:empty");
                if(posibilidades.length>0)
                {
                    var juegaMaquina = parseInt(Math.random()*posibilidades.length);
                    posibilidades[juegaMaquina].innerHTML="0";
                    piezas[posibilidades[juegaMaquina].fila][posibilidades[juegaMaquina].columna]="0";

                    if(victoria(piezas))
                    {
                        alert("Gana Maquina");
                    }
                }
            }
        }
        })
    }
})
