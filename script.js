
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Developer", "Designer", "Freelancer"],
         typeSpeed:60,
         backSpeed:60,
         loop:true
     });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.projects .carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
    $('.skills .carousel').owlCarousel({
      
      loop: true,
      autoplayHoverPauser: true,
      items: 6, //numero de itens visiveis
      loop: true, //se vai fazer loop
      margin: 0, //espacamento entre os itens
      autoplay: true, //se vai ser automatico
      autoplayTimeout: 3000, //tempo entre as transições 
    });
    $('.particles-js').particles({
      particles: {
        number: {
          value: 157,
          density: { enable: true, value_area: 954.0391633076542 }
        },
        color: { value: "#09e832" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 7 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 0.06360261088717695,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#09e832",
          opacity: 0.3021124017140905,
          width: 0.7950326360897119
        },
        move: {
          enable: true,
          speed: 6,
          direction: "top-right",
          random: true,
          straight: true,
          out_mode: "out",
          bounce: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 0.8120706176609115 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
  
});



