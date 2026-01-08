$(document).ready(function() {
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(); $(this).toggleClass('active');
    });
});

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

//Animate on Scroll library
AOS.init({
// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 150, // offset (in px) so that even though we arrive at the original location the element is not scrolling in straight away
delay: 50, // values from 0 to 3000, with step 50ms
duration: 1000, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
});


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

