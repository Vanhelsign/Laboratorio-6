
$(document).ready(function(){
    //seccion del modal append
    const botonAppend = $('#append');
    const contenedorAppend = $('.contentAppend');

    botonAppend.click(function(){
        const elementoNuevo = $("<p>¡Nuevo párrafo!</p>");
        contenedorAppend.append(elementoNuevo);
    });

    $('#staticBackdrop').on('hidden.bs.modal',function(){
        contenedorAppend.children(':not(:first)').remove();
    });

    //seccion del modal prepend
    const botonPrepend = $('#prepend');
    const contenedorPrepend = $('.contentPrepend');

    botonPrepend.click(function(){
        const elementoNuevo = $("<p>¡Nuevo párrafo!</p>");
        contenedorPrepend.prepend(elementoNuevo);
    });

    $('#staticBackdrop2').on('hidden.bs.modal',function(){
        contenedorPrepend.children(':not(:first)').remove();
    });

    //seccion del modal after

    const botonAfter = $('#after');
    const contenedorAfter = $('.contentAfter');

    botonAfter.click(function(){
        const elementoNuevo = $("<p class='bg-danger'>¡Soy un parrafo dentro de un div distinto!</p>");
        contenedorAfter.after(elementoNuevo);
    });

    $('#staticBackdrop3').on('hidden.bs.modal',function(){

        contenedorAfter.nextAll().remove();
        contenedorAfter.children(':not(:first)').remove();
    });

    //seccion del modal before

    const botonBefore = $('#before');
    const contenedorBefore = $('.contentBefore');

    botonBefore.click(function(){
        const elementoNuevo = $("<p class='bg-danger'>¡Soy un parrafo dentro de un div distinto!</p>");
        contenedorBefore.before(elementoNuevo);
    });

    $('#staticBackdrop4').on('hidden.bs.modal',function(){
        contenedorBefore.prevAll().remove();
    });

    //seccion del modal remove
    const botonRemove = $('#remove');
    const contenedorRemove = $('.contentRemove');

    botonRemove.click(function(){
        contenedorRemove.find('p:last').remove();
    });

    $('#staticBackdrop5').on('hidden.bs.modal',function(){
        contenedorRemove.empty();
        const contento = `
        
            <P>Prueba de la funcion de remove en un comentario 1</P>
            <P>Prueba de la funcion de remove en un comentario 2</P>
            <P>Prueba de la funcion de remove en un comentario 3</P>
            <P>Prueba de la funcion de remove en un comentario 4</P>
            <P>Prueba de la funcion de remove en un comentario 5</P>
            <P>Prueba de la funcion de remove en un comentario 6</P>

        `;

        contenedorRemove.append(contento);
    });
    
})
