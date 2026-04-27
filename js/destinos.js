$(document).ready(function () {

    // --- MODO CLARO / OSCURO ---
    // (Funciona en sintonía con el que tenías en contacto.js)
    $("#cambioClaro").click(function () {
        $("body").attr("data-bs-theme", "light");
        $("main").css("--bg-color", "#f4f6f8");
    });

    $("#cambioOscuro").click(function () {
        $("body").attr("data-bs-theme", "dark");
        $("main").css("--bg-color", "#121212");
    });

    // --- FILTROS DINÁMICOS CON JQUERY ---
    $('#filtros-destinos .btn').click(function () {
        // Estilos de los botones
        $('#filtros-destinos .btn').removeClass('active btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('active btn-primary');

        let filtroSeleccionado = $(this).data('filter');

        if (filtroSeleccionado === 'todos') {
            $('.destino-card').show(400); // Muestra todos con animación
        } else {
            // Ocultar todos, luego filtrar y mostrar solo los seleccionados
            $('.destino-card').hide(); 
            $('.destino-card').filter('.' + filtroSeleccionado).show(400); 
        }
    });

    // --- SANITIZACIÓN ---
    // Previene inyección de código básico reemplazando los corchetes angulares
    function sanitizarDato(texto) {
        return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // Resetear el modal cuando el usuario lo cierra, para que vuelva a estar como al principio
    $('#modalPhishing').on('hidden.bs.modal', function () {
        $('#formSimulacionPhishing')[0].reset();
        $('#phishingFeedback').hide();
        $('#phishingFormContainer').show();
    });

});