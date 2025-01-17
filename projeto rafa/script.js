$(document).ready(function() {
    $('#menu-bar').click(function() {
        $(this).toggleClass('fa-times');  // Alterna entre os ícones de menu e fechar
        $('.navbar').toggleClass('nav-toggle');  // Alterna a visibilidade do menu
    });
});
