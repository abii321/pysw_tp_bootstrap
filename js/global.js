$(document).ready(function () {
    $("#cambioClaro").click(function () {
        $("body").attr("data-bs-theme", "light");
    });

    $("#cambioOscuro").click(function () {
        $("body").attr("data-bs-theme", "dark");
    });

});