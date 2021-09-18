$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu, .header__burger::after').toggleClass('someActive');
    });
}); 