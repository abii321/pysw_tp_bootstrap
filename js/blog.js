$(document).ready(function() {
    
    // --- MODO OSCURO ---
    $('#cambioOscuro').click(function() {
        $('body').attr('data-bs-theme', 'dark');
        $('.navbar').addClass('navbar-dark'); 
    });

    $('#cambioClaro').click(function() {
        $('body').attr('data-bs-theme', 'light');
        $('.navbar').removeClass('navbar-dark');
    });

    // --- SISTEMA DE COMENTARIOS INTERACTIVO ---
    $('#form-comentario').submit(function(e) {
        e.preventDefault(); // Evita que la página recargue al mandar el form

        // Tomamos los valores de los inputs
        let nombre = $('#nombreUsuario').val();
        let texto = $('#textoComentario').val();
        
        // Creamos la "Burbuja" de HTML usando los datos
        let nuevoComentarioHTML = `
            <div class="d-flex mb-3 comentario-burbuja p-3 rounded-3 shadow-sm bg-light" style="display:none;">
                <img src="https://ui-avatars.com/api/?name=${nombre}&background=random" class="rounded-circle me-3" width="50" height="50" alt="Avatar">
                <div>
                    <h6 class="fw-bold mb-1">${nombre} <span class="text-muted small fw-normal ms-2">Justo ahora</span></h6>
                    <p class="mb-0 text-secondary small">${texto}</p>
                </div>
            </div>
        `;

        // Agregamos el comentario arriba de todo con una animación
        $('#lista-comentarios').prepend(nuevoComentarioHTML);
        $('#lista-comentarios .comentario-burbuja').first().fadeIn('slow');

        // Limpiamos el formulario
        $('#form-comentario')[0].reset();
    });

});