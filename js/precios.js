$(document).ready(function () {

    // 1. Inicializar los Tooltips de Bootstrap (Requisito obligatorio)
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // 2. Lógica del Modo Oscuro / Claro
    $('#cambioOscuro').click(function () {
        $('body').attr('data-bs-theme', 'dark');
        $('.navbar').addClass('navbar-dark');
    });

    $('#cambioClaro').click(function () {
        $('body').attr('data-bs-theme', 'light');
        $('.navbar').removeClass('navbar-dark');
    });

});