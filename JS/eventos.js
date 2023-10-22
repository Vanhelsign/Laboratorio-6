
$(document).ready(function(){

    //FUNCION CLICK

    const botonClick = $('.botonClick');

    botonClick.click(function(){

        alert('Se ha presionado el boton que ejecuta la funcion "click"')

    });

    //FUNCION MOUSEENTER

    const contenedor2 = $('.contenido');

    contenedor2.mouseenter(function(){

        contenedor2.css("background-color", "aquamarine");

    });

    contenedor2.mouseleave(function(){

        contenedor2.css("background-color", "cadetBlue");

    });

    //FUNCION ON

    const contenedor3 = $('#listado');

    contenedor3.on("click", "li", function () {

        alert("Haz hecho clic en: " + $(this).text());

    });

    //FUNCION TRIGGER

    $('.toggle').click(function(){

        $('.toggle').on("botonDeEvento", function(){

            alert("Se activo el boton por medio de la funcion trigger");
    
        });
    
        $('.toggle').trigger("botonDeEvento");

    });

    //FUNCION KEYDOWN

    $("#miInput").keydown(function (event) {
        
        if (event.key.match(/[a-zA-Z]/)) {

          alert("Presionaste la letra: " + event.key);

        }

    });

});