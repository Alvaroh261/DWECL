<html>

<head>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" rel="stylesheet" />
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link href="style.css" type="text/css" rel="stylesheet" />

</head>

<body>
    <div class="container">
        <span>Mi Numero: </span><input type="text" class="my-1" id="buscador"> <span class="buscar btn bg-primary">Buscar</span>
        <div class="inbox_msg">
            <div class="inbox_people">
                <div class="headind_srch">
                    <div class="recent_heading">
                        <h4 class="miNumero">Mis Contactos</h4>
                    </div>
                </div>
                <div class="inbox_chat"></div>
            </div>
            <div class="mesgs">
                <div class="msg_history"></div>
                <div class="type_msg">
                    <div class="input_msg_write">
                        <input type="text" class="write_msg text_conversacion" placeholder="Type a message" />
                        <button class="msg_send_btn enviar" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="myJS.js"></script>
    <script src="peticionesAJAX.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</body>

</html>