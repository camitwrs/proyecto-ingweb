$(document).ready(function () {
    // Redireccion con jquery
    $("#btn-registro").click(function (e) {
        e.preventDefault();
        window.location.href = 'registro.html';
    });
    
    $("#btn-inicioSesion").click(function (e) {
        e.preventDefault();
        window.location.href = 'inicio-sesion.html';
    });

    $("#btn-recuperar").click(function (e) {
        e.preventDefault();
        window.location.href = 'recuperar-contra.html';
    });

    $("#btn-adoptante").click(function (e) {
        e.preventDefault();
        window.location.href = 'adoptante-main.html';
    });

    $("#btn-publicador").click(function (e) {
        e.preventDefault();
        window.location.href = 'publicador-main.html';
    });

    $("#btn-nueva-publi").click(function (e) {
        e.preventDefault();
        
        // Para términos de la entrega parcial, se va a crear un item predeterminado y se mostrará al apretar el boton de nueva publicacion, pero la idea es que eso ocurra cuando se aprete el boton de "publicar" de nueva-publicacion-html

         // Crear un nuevo elemento de galería
         var galleryItem = $('<div>').addClass('col-12 col-md-6 col-lg-4 mb-4');

         // Agregar una imagen al elemento de galería
         var image = $('<img>').attr('src', 'https://media.istockphoto.com/id/627871240/photo/dog.jpg?s=612x612&w=0&k=20&c=uZpNv2mQH-XKxd-S6iHZSxGnss4D7x8BGIiDKYnyRg4=').addClass('img-fluid card-img-top').appendTo(galleryItem);
 
         // Agregar un contenedor de información al elemento de galería
         var infoContainer = $('<div>').addClass('bg-white rounded shadow').appendTo(galleryItem);
 
         // Agregar un título al contenedor de información
         var title = $('<h4>').addClass('p-4').appendTo(infoContainer);
 
         // Agregar un enlace al título
         var titleLink = $('<a>').attr('href', '#').addClass('text-dark').text('nombre_mascota').appendTo(title);
 
         // Agregar una descripción al contenedor de información
         var description = $('<p>').addClass('descripcion small text-muted mb-0').text('Ciudad: ...').appendTo(infoContainer);
 
         // Agregar un enlace al contenedor de información
         var link = $('<a>').attr('href', '#').appendTo(infoContainer);
 
         // Agregar un contenedor de interés al enlace
         var interestContainer = $('<div>').addClass('d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4').appendTo(link);
 
         // Agregar un texto al contenedor de interés
         var interestText = $('<p>').addClass('small mb-0').appendTo(interestContainer);
 
         // Agregar un span al texto de interés
         var interestSpan = $('<span>').addClass('font-weight-bold').text('Interesados').appendTo(interestText);
 
         // Agregar un badge al contenedor de interés
         var interestBadge = $('<span>').addClass('badge text-black').text('6').appendTo(interestContainer);
 
         // Agregar el elemento de galería al contenedor de la galería
         $('.gallery-container').append(galleryItem);
 
    });

    //Evento del boton publicar de nueva-publicacion.html
    $("#btn-publicar").click(function (e) {
        e.preventDefault();
        
        // Como todavía falta crear el perfil de la mascota, al hacer click en publicar debería agregar un nuevo gallery-item. 
        // Nuestra idea era que al apretar publicar, se redireccionara a publicador-main.html y se mostrara el nuevo item, pero si lo hacemos ahora, se pierde la información y se sigue mostrando la página inicial como estaba. Suponemos que cuando tengamos una base de datos se podrá guardar como lo tenemos en mente.

        window.location.href = 'publicador-main.html';
        
    });

    
});