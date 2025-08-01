

document.addEventListener("DOMContentLoaded", function(e){
  slideMenuToggleHandler();
  yotubeBackground_player();
  article07_slide();
  testimonialSlide();
  qnaToggle();
})

const qnaToggle = () => {
  $('.main .qnaArti .qna_list .item .q_box').click(function(){
    $(this).closest('.item').toggleClass('active')
    $(this).siblings('.a_box').slideToggle();
  })
}

const testimonialSlide = () => {
  var swiper = new Swiper(".main .testimonialsArti .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      400: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      950: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
}

const article07_slide = () => {
  var swiper = new Swiper(".main .article07 .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      400: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      950: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

const yotubeBackground_player = () => {
  $('[data-vbg]').youtube_background(); // 실행
}

const slideMenuToggleHandler = () => {
  $('header .menu').click(function(){
    $('.close-menu-bg').addClass('show');
    $('.right-slide-menu').addClass('show');
  })
  $('.right-slide-menu .btn-wrap .close-btn').click(function(){
    $('.close-menu-bg').removeClass('show');
    $('.right-slide-menu').removeClass('show');
  })
  $('.close-menu-bg').click(function(){
    $('.close-menu-bg').removeClass('show');
    $('.right-slide-menu').removeClass('show');
  })
}
