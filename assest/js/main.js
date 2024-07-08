// header scroll
 let navBar = document.querySelector(".navbar");
 window.onscroll = function(){
    if(document.documentElement.scrollTop  > 20){
        navBar.classList.add("header-scrolled")
    }
    else{
        navBar.classList.remove("header-scrolled")
    }
 }
// nav hide
  let navLink = document.querySelectorAll(".nav-link");
    let navCollapsed = document.querySelector(".navbar-collapse.collapse");
    navLink.forEach(function(a){
      a.addEventListener("click", function(){
        navCollapsed.classList.remove("show");
      });
    });

    
// owl carousel
$(document).ready(function(){
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
