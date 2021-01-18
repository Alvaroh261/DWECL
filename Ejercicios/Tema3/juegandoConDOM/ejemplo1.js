window.addEventListener("load", function(){

    var marco = document.getElementById("marco");
    var ventanas = marco.getElementsByClassName("ventana");

    

    function persiana(objeto)
    {
        var altura = parseInt(objeto.clientHeight);

        function reducir()
        {
            objeto.style.height = (--altura)+"px";
            if(altura > 0)
            {
                setTimeout(reducir,30);
            }
        }
        setTimeout(reducir,50);
    }

    ventanas[1].addEventListener("click",function(){
        ventanas[1].style.backgroundColor="yellow";
        var clasesActuales = this.getAttribute("class");
        if(clasesActuales.indexOf(" oculto") == 1)
        {
            clasesActuales+= " oculto";
            this.setAttribute("class",clasesActuales);
        }

        persiana(this);
    })

    ventanas[2].addEventListener("click",function(){
        var clasesActuales = this.previousElementSibling.getAttribute("class");
        clasesActuales = clasesActuales.replace(/ ?oculto/g,"");
        this.previousElementSibling.setAttribute("class",clasesActuales);
    })


})