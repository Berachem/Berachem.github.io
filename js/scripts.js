/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 6,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Obtenez l'élément actif
    var activeItem = $('.carousel-item.active');

    // Trouvez la vidéo à l'intérieur de l'élément actif
    var activeVideo = activeItem.find('video');

    // Vérifiez si une vidéo existe dans l'élément actif
    if (activeVideo.length > 0) {
        // Lancez la vidéo de l'élément actif
        activeVideo.get(0).play();
      }
    
});
$(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    
    $("div.progress").css("width", progress + "%");
  })

$(document).ready(function(){
    $("a").tooltip();
    $("span").tooltip();
    $("img").tooltip();
});

//Get the button:
mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });

}
/* play video twice as fast */
document.querySelector('video').playbackRate = 3;


$(document).ready(function() {
    // Écoutez l'événement 'slid.bs.carousel' de Bootstrap pour détecter le changement d'item actif
    $('.carousel').on('slid.bs.carousel', function() {
      // Pausez toutes les vidéos
      $('video').each(function() {
        this.pause();
      });

      // Obtenez l'élément actif
      var activeItem = $('.carousel-item.active');

      // Trouvez la vidéo à l'intérieur de l'élément actif
      var activeVideo = activeItem.find('video');

      // Vérifiez si une vidéo existe dans l'élément actif
      if (activeVideo.length > 0) {
        // Lancez la vidéo de l'élément actif
        activeVideo.get(0).play();
      }
    });
  });


