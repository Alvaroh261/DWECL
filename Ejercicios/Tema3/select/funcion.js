window.addEventListener("load", function()
{

    var btnPasarUno = document.getElementById("pasarUno");
    var btnDevolverUno = document.getElementById("devolverUno");
    var btnPasarTodo = document.getElementById("pasarTodo");
    var btnDevolverTodo = document.getElementById("devolverTodo");

    btnPasarUno.addEventListener("click", function(){

        var valorSelect1 = document.getElementById("select1").value;
        if(valorSelect1 != "")
        {
            var select2 = document.getElementById("select2");
            var opcion = document.createElement("option");
            opcion.text = valorSelect1;
            select2.add(opcion);

            var select1 = document.getElementById("select1");
            select1.remove(select1.selectedIndex);
        }
        
    })


    btnDevolverUno.addEventListener("click", function(){

        var valorSelect2 = document.getElementById("select2").value;
        if(valorSelect2 != "")
        {
            var select1 = document.getElementById("select1");
            var opcion = document.createElement("option");
            opcion.text = valorSelect2;
            select1.add(opcion);
            
            var select2 = document.getElementById("select2");
            select2.remove(select2.selectedIndex);
        }
    })

    btnPasarTodo.addEventListener("click", function(){

        var tamanio = document.getElementById("select1").options.length;
        for(let i = 0; i<tamanio; i++)
        {
            document.getElementById("select1").selectedIndex = "0";

            var valorSelect1 = document.getElementById("select1").value;
            var select2 = document.getElementById("select2");
            var opcion = document.createElement("option");
            opcion.text = valorSelect1;
            select2.add(opcion);
    
            var select1 = document.getElementById("select1");
            select1.remove(select1.selectedIndex);
        }
        
    })

    btnDevolverTodo.addEventListener("click", function(){

        var tamanio = document.getElementById("select2").options.length;
        for(let i = 0; i<tamanio; i++)
        {
            document.getElementById("select2").selectedIndex = "0";

            var valorSelect2 = document.getElementById("select2").value;
            var select1 = document.getElementById("select1");
            var opcion = document.createElement("option");
            opcion.text = valorSelect2;
            select1.add(opcion);
            
            var select2 = document.getElementById("select2");
            select2.remove(select2.selectedIndex);
        }
    })

})