$(document).ready(function() {
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(); $(this).toggleClass('active');
    });
});