$(document).ready(function () {

    // Validaciones en tiempo real
    $("#nombre").on("input", function () {
        let valor = $(this).val();

        if (valor.length < 3) $(this).addClass("is-invalid").removeClass("is-valid");
        else $(this).addClass("is-valid").removeClass("is-invalid");
    });

    $("#correo").on("input", function () {
        let valor = $(this).val();
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(valor)) $(this).addClass("is-invalid").removeClass("is-valid");
        else $(this).addClass("is-valid").removeClass("is-invalid");
    });

    $("#asunto").on("input", function () {
        let valor = $(this).val();

        if (valor.length < 4) $(this).addClass("is-invalid").removeClass("is-valid");
        else $(this).addClass("is-valid").removeClass("is-invalid");
    });

    $("#mensaje").on("input", function () {
        let valor = $(this).val();

        if (valor.length < 10) $(this).addClass("is-invalid").removeClass("is-valid");
        else $(this).addClass("is-valid").removeClass("is-invalid");
    });


    // Sanitizacion
    function sanitizar(texto) {
        return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    
    function validarCampo(selector, condicion) {
        let valor = $(selector).val().trim();

        if (condicion(valor)) {
            $(selector).addClass("is-invalid").removeClass("is-valid");
            return false;
        } else {
            $(selector).addClass("is-valid").removeClass("is-invalid");
            return true;
        }
    }

    // Enviar + modal
    $("#btnEnviar").click(function (e) {
        e.preventDefault();

        let nombreOk = validarCampo($("#nombre"), v => v.length < 3);
        let correoOk = validarCampo($("#correo"), v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
        let asuntoOk = validarCampo($("#asunto"), v => v.length < 4);
        let mensajeOk = validarCampo($("#mensaje"), v => v.length < 10);

        let condicionesOk = $("#condiciones").is(":checked");
        if (!condicionesOk) $("#condiciones").addClass("is-invalid");
        else $("#condiciones").removeClass("is-invalid");

        if (!nombreOk || !correoOk || !asuntoOk || !mensajeOk || !condicionesOk) return;
        
        let nombre = sanitizar($("#nombre").val().trim());
        let correo = sanitizar($("#correo").val().trim());
        let asunto = sanitizar($("#asunto").val().trim());
        let mensaje = sanitizar($("#mensaje").val().trim());

        $("#confNombre").text(nombre);
        $("#confCorreo").text(correo);
        $("#confAsunto").text(asunto);
        $("#confMensaje").text(mensaje);
        $("#modalConfirmacion").modal("show");

    });

    // Boton de modal confirmacion + spinner
    $("#modalBtnConfirm").click(function (e) {
        e.preventDefault();

        // mostrar spinner
        $("#estadoEnvio").removeClass("d-none").addClass("d-flex");
        $("#modalConfirmacion").modal("hide");

        setTimeout(function () {
            $("#estadoEnvio").addClass("d-none").removeClass("d-flex");
        }, 2000);

        //limpiar
        $(".formulario")[0].reset();
        $(".form-control").removeClass("is-valid is-invalid");
        $("#condiciones").prop("checked", false).removeClass("is-invalid");

    })

});

