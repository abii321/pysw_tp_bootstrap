$(document).ready(function () {

    // 1. Filtros Dinámicos de Destinos (.filter, .hide, .show)
    $('.btn-filtro').click(function () {
        // Remover clase active de todos y agregarla al cliqueado
        $('.btn-filtro').removeClass('active');
        $(this).addClass('active');

        let categoria = $(this).attr('data-filter');

        if (categoria === 'todos') {
            // Mostrar todos con una pequeña animación
            $('.destino-item').show(400);
        } else {
            // Ocultar todos
            $('.destino-item').hide();
            // Filtrar y mostrar solo los de la categoría seleccionada
            $('.destino-item').filter('[data-categoria="' + categoria + '"]').show(400);
        }
    });

    // 2. Efecto Zoom en Cards combinando CSS y jQuery
    $('.card-zoom').hover(
        function () {
            // Al entrar el mouse
            $(this).css('transform', 'scale(1.05)');
            $(this).addClass('shadow-lg');
        },
        function () {
            // Al salir el mouse
            $(this).css('transform', 'scale(1)');
            $(this).removeClass('shadow-lg');
        }
    );

    // 3. Módulo Educativo Phishing - Feedback con jQuery
    $('.btn-phishing-test').click(function () {
        let esSeguro = $(this).attr('data-seguro');
        let $feedback = $('#feedback-phishing');

        // Limpiamos clases previas
        $feedback.removeClass('alert-danger alert-success');

        if (esSeguro === 'falso') {
            $feedback.addClass('alert alert-danger')
                     .html('<i class="bi bi-x-circle-fill"></i> <strong>¡Caíste en la trampa!</strong> Fíjate en el remitente: "vuelos-seguros-update.com" es un dominio falso diseñado para engañarte y robar tu contraseña. Nunca hagas clic en enlaces de correos alarmantes.')
                     .hide().fadeIn(500);
        } else {
            $feedback.addClass('alert alert-success')
                     .html('<i class="bi bi-check-circle-fill"></i> <strong>¡Excelente decisión!</strong> Siempre es mejor ignorar los enlaces en correos sospechosos y dirigirte manualmente a la aplicación oficial o sitio web que ya conoces.')
                     .hide().fadeIn(500);
        }
    });

});