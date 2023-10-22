$(document).ready(function(){

    //funciones para la operacion "addClass"
    const botonAmarillo = $('#colorAmarillo');
    const botonAzul = $('#fondoAzul');
    const botonTamaño = $('#alturaLetra');
    const botonBond = $('#bondLetra');
    const contenedor = $('.texto');

    botonAmarillo.click(function(){

        contenedor.addClass("text-warning");

    });

    botonAzul.click(function(){

        contenedor.addClass("bg-primary");

    });

    botonTamaño.click(function(){

        contenedor.addClass("fs-3");

    });

    botonBond.click(function(){

        contenedor.addClass("fw-bold");

    });

    $('#staticBackdrop').on('hidden.bs.modal',function(){
        contenedor.removeClass().addClass("texto");
    });

    //funciones para la operacion removeClass

    const botonRojo = $('#colorRojo');
    const botonFondoAmarillo = $('#fondoAmarillo');
    const encabezado = $('#alturaLetraEncabezado');
    const cursiva = $('#cursivaLetra');
    const contenedor2 = $('.text2');

    botonRojo.click(function(){

        contenedor2.removeClass("text-danger");

    });

    botonFondoAmarillo.click(function(){

        contenedor2.removeClass("bg-warning");

    });

    encabezado.click(function(){

        contenedor2.removeClass("fs-5");

    });

    cursiva.click(function(){

        contenedor2.removeClass("fst-italic");

    });

    $('#staticBackdrop2').on('hidden.bs.modal',function(){

        contenedor2.removeClass().addClass("text-danger bg-warning fs-5 fst-italic text2");

    });

    //funciones para la operacion de toggleClass

    const botonToggleColor = $('#colorTexto');
    const botonToggleFondo = $('#fondoTexto');
    const botonToggleEncabezado = $('#textoEncabezado');
    const botonToggleLetra = $('#textoLetra');
    const contenedor3 = $('.text3');

    botonToggleColor.click(function(){

        contenedor3.toggleClass("text-danger text-black");

    });

    botonToggleFondo.click(function(){

        contenedor3.toggleClass("bg-warning bg-primary");

    });

    botonToggleEncabezado.click(function(){

        contenedor3.toggleClass("fs-5 fs-3");

    });

    botonToggleLetra.click(function(){

        contenedor3.toggleClass("fst-italic fw-bold");

    });

    //Funciones para las operaciones de CSS

    const botonAgregar = $('#ponerColor');
    const botonDetectar = $('#detectarFondo');
    const contenedor4 = $('.text4');
    const contenedor5 = $('.contentCSS');

    botonAgregar.click(function(){

        colorOriginalTexto = contenedor4.css("color");
        contenedor4.css("color", "white");

    });

    botonDetectar.click(function(){

        const colorFondo = contenedor4.css("background-color");
        const texto = `<p class="textoFormado">El color de fondo del texto es: ${colorFondo} </p>`;
        contenedor4.append(texto);

    });

    $('#staticBackdrop4').on('hidden.bs.modal',function(){

        contenedor4.css("color", "black");
        contenedor5.find(".textoFormado").remove();

    });

});