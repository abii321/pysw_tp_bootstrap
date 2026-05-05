$(document).ready(function () {
    $("#titulo").fadeIn(1000);
    $("#texto").fadeIn(2000);


    let $this = $('.contador');
    let target = +$this.attr('data-target');

    $({ countNum: 0 }).animate(
        { countNum: target },
        {
            duration: 5000,
            easing: 'swing',
            step: function () {
                $this.text("+ " + Math.floor(this.countNum));
            },
            complete: function () {
                $this.text("+ " + this.countNum);
            }
        }
    );


    function sanitizar(texto) {
        return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    $(".formulario").submit(function (e) {
        e.preventDefault();

        let nombre = sanitizar($("#nombre").val().trim());
        let apellido = sanitizar($("#apellido").val().trim());
        let correo = sanitizar($("#correo").val().trim());

        // Validación básica
        if (nombre === "" || apellido === "" || correo === "") {
            $("#mensaje").text("Completa todos los campos").css("color", "red");
            return;
        }

        // Mensaje seguro
        $("#mensaje")
            .text("Gracias por suscribirte, " + nombre)
            .css("color", "green")
            .hide()
            .fadeIn(800);
            setTimeout(function () { $("#mensaje").fadeOut(800); }, 3000); // espera 3 segundos


        // Limpiar formulario
        $(".formulario")[0].reset();
    });



});

