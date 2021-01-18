/**/


window.addEventListener("load",function(){

    document.getElementById("jugar").addEventListener("click",function(){

        //Capturo las celdas de la tabla
        var tds = document.querySelectorAll("tbody#puzzle td");
        var spans = document.querySelectorAll("tbody#puzzle span");
        var hueco = document.getElementById("hueco");


        //Genero el vector para desordenar
        var vector = [];
        for (let i=0; i<spans.length;i++)
        {
            vector.push(spans[i]);

            var fila = parseInt(i/4);
            var columna = i%4;

            if(i<15)
            {
                spans[i].style.backgroundImage="url('jaen-48-horas-t.jpg')";
            }

            spans[i].style.backgroundPositionX = "-"+(200*columna)+"px";
            spans[i].style.backgroundPositionY = "-"+(150*fila)+"px";
        }

        hueco.style.backgroundImage = "";

        //Desordeno el vector
        vector.sort(function(a,b){return Math.random()-0.5});

        //Actualizo los elementos de la tabla
        for (let i=0; i<tds.length;i++)
        {
            tds[i].fila = parseInt(i/4);
            tds[i].columna = i%4;
            tds[i].appendChild(vector[i]);
            tds[i].addEventListener("click",function(){

                var yPulsada = this.fila;
                var xPulsada = this.columna;
                var yHueco = hueco.parentNode.fila;
                var xHueco = hueco.parentNode.columna;

                distancia2=(yPulsada-yHueco)*(yPulsada-yHueco)+(xPulsada-xHueco)*(xPulsada-xHueco);

                if(distancia2==1)
                {
                    var spanPulsado = this.children[0];
                    hueco.parentNode.appendChild(spanPulsado);
                    this.appendChild(hueco);
                }

            })
        }
    })
    

})