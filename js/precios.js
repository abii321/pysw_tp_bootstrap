$(document).ready(function() {
    
    // 1. Inicializar los Tooltips de Bootstrap (Requisito obligatorio)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 2. Lógica del Modo Oscuro / Claro
    $('#cambioOscuro').click(function() {
        $('body').attr('data-bs-theme', 'dark');
        $('.navbar').addClass('navbar-dark'); 
    });

    $('#cambioClaro').click(function() {
        $('body').attr('data-bs-theme', 'light');
        $('.navbar').removeClass('navbar-dark');
    });

});