$(document).ready(function() {
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle(); $(this).toggleClass('active');
    });
});