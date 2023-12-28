$(document).ready(function() {
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(); $(this).toggleClass('active');
    });
});

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});