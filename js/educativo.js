$(document).ready(function () {

    // --- MODO CLARO / OSCURO ---
    $("#cambioClaro").click(function () {
        $("body").attr("data-bs-theme", "light");
        $("main").css("--bg-color", "#f4f6f8");
    });

    $("#cambioOscuro").click(function () {
        $("body").attr("data-bs-theme", "dark");
        $("main").css("--bg-color", "#121212");
    });

    // --- SANITIZACIÓN BÁSICA ---
    function sanitizarDato(texto) {
        return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // --- LÓGICA DE LA SIMULACIÓN ---
    $('#formSimulacionPhishing').submit(function (e) {
        e.preventDefault(); // Evita que la página recargue

        // Simulamos captura y sanitización de datos (no se envían a ningún lado)
        let dniIngresado = sanitizarDato($('#fakeDNI').val().trim());
        let passIngresado = sanitizarDato($('#fakePass').val().trim());

        if(dniIngresado !== "" && passIngresado !== "") {
            // Animación jQuery: Ocultamos el formulario y mostramos el error
            $('#phishingFormContainer').slideUp(400, function() {
                $('#phishingFeedback').slideDown(500);
            });
        }
    });

    // Botón para reiniciar la prueba
    $('#btnReiniciarSimulacion').click(function () {
        $('#phishingFeedback').slideUp(400, function() {
            $('#formSimulacionPhishing')[0].reset(); // Limpia los inputs
            $('#phishingFormContainer').slideDown(500);
        });
    });

});