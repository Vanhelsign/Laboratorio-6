
$(document).ready(function(){

    //Funciones de NOT

    const botonNot = $('#colorNot');
    const contenedor1 = $('.contentNot');

    botonNot.click(function(){

        contenedor1.find("p").not(".content").addClass("text-danger bg-warning");

    });

    $('#staticBackdrop').on('hidden.bs.modal',function(){

        contenedor1.find("p").not(".content").removeClass("text-danger bg-warning");

    });

    //Funciones first y last

    const botonFirstLast = $('#colorFisrtLast');
    const contenedor2 = $('.contentFirstLast');

    botonFirstLast.click(function(){

        contenedor2.find("p").first().addClass("text-danger bg-warning");
        contenedor2.find("p").last().addClass("text-danger bg-warning");

    });

    $('#staticBackdrop2').on('hidden.bs.modal',function(){

        contenedor2.find("p").first().removeClass("text-danger bg-warning");
        contenedor2.find("p").last().removeClass("text-danger bg-warning");

    });

    //Funciones next y prev

    const botonNextPrev = $('#colorNextPrev');
    const contenedor3 = $('.contentNextPrev');

    botonNextPrev.click(function(){

        contenedor3.find(".elParrafo").next().addClass("text-danger bg-warning");
        contenedor3.find(".elParrafo").prev().addClass("text-danger bg-warning");

    });

    $('#staticBackdrop3').on('hidden.bs.modal',function(){

        contenedor3.find(".elParrafo").next().removeClass("text-danger bg-warning");
        contenedor3.find(".elParrafo").prev().removeClass("text-danger bg-warning");

    });

    //Funciones children

    const botonChildren = $('#colorChildren');
    const contenedor4 = $('.contenidos');

    botonChildren.click(function(){

        contenedor4.children(".contenedor").addClass("text-danger bg-warning");

    });

    $('#staticBackdrop4').on('hidden.bs.modal',function(){

        contenedor4.children(".contenedor").removeClass("text-danger bg-warning");

    });

    //Funciones find

    const botonFind = $('#find');
    const contenedor5 = $('.contenedorFind');

    botonFind.click(function(){

        contenedor5.find("p").addClass("text-danger bg-warning");

    });

    $('#staticBackdrop5').on('hidden.bs.modal',function(){

        contenedor5.find("p").removeClass("text-danger bg-warning");

    });

});