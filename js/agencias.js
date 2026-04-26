$(document).ready(function() {
    $('#cambioOscuro').click(function() {
    // Le decimos a Bootstrap que active su modo oscuro
    $('body').attr('data-bs-theme', 'dark');
});

$('#cambioClaro').click(function() {
    // Le decimos a Bootstrap que vuelva al modo claro
    $('body').attr('data-bs-theme', 'light');
});
    // Flip con jQuery toggle al hacer hover
    $('.card-custom').hover(function() {
        $(this).find('.card-inner').toggleClass('flipped');
    });

    // Rating dinámico
    $('.rating-box').each(function() {
        let rating = $(this).data('rating');
        let stars = '<div class="rating">';
        for(let i = 1; i <= 5; i++) {
            stars += (i <= rating) ? '<span>★</span>' : '<span style="opacity: 0.3">★</span>';
        }
        stars += '</div>';
        $(this).html(stars);
    });
});