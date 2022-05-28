var btnNext = document.getElementById('button-next');
var btnPrev = document.getElementById('button-prev');

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },
  });

var swiper = new Swiper(".mySwiper7", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination7",
      clickable: true,
    },
  }); 
