

document.addEventListener("DOMContentLoaded", function(e){
  slideMenuToggleHandler();
  yotubeBackground_player();
  article07_slide();
  testimonialSlide();
  qnaToggle();
  //videoStart();
  countingNumberHandler();
  windowResizeVideoStop();
  maximumSlide();
  clickToVideoPlay();
})

const clickToVideoPlay = () => {
  var $trigger = $(".main .article03 .video-infomaion");
  var $videoPc = $("#videoPc").get(0); // DOM 요소
  var $videoMo = $("#videoMo").get(0);

  $trigger.on("click", function() {
    $trigger.hide();  // jQuery hide() = display: none
    if (window.innerWidth > 650) {
      $videoPc.play();
    } else {
      $videoMo.play();
    }
  });
}

const maximumSlide = () => {
  var swiper = new Swiper(".main .MaximumArti .mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      450:{
        slidesPerView: 1,
      },
      500:{
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 1.6,
      },
      950: {
        slidesPerView: 2.2,
      },
    },
  });
}

const windowResizeVideoStop = () => {
  const videoPc = document.getElementById('videoPc');
  const videoMo = document.getElementById('videoMo');

  // 화면 크기 변경 시 두 영상 모두 멈춤
  window.addEventListener('resize', function () {
    if (!videoPc.paused) videoPc.pause();
    if (!videoMo.paused) videoMo.pause();
  });
}

const videoStart = () => {
  const targetObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "class" &&
        $(mutation.target).hasClass("on")
      ) {
        // .article03 안의 video 재생
        $(".main .article03 video").each(function () {
          this.play();
        });
      }
    });
  });

  const article03 = document.querySelector(".main .article03");
  if (article03) {
    targetObserver.observe(article03, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
}

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


const countingNumberHandler = () => {
  const countList = document.querySelector('.main .countArti');
  const numbers = document.querySelectorAll('.main .countArti .count_list .item .box .count');
  const duration = 1; // Duration in seconds
  if(countList){
      // Function to reset numbers to 0
      function resetNumbers() {
          numbers.forEach(number => {
              number.textContent = '0';
          });
      }

      // Function to format numbers with commas
      function formatNumber(num) {
          return num.toLocaleString();
      }

      // Function to animate counting
      function animateCount() {
          numbers.forEach(number => {
              const target = +number.getAttribute('data-count');
              const increment = target / (duration * 60); // 60 frames per second
              let current = 0;

              function updateCount() {
                  current += increment;
                  if (current < target) {
                      number.textContent = formatNumber(Math.ceil(current));
                      requestAnimationFrame(updateCount);
                  } else {
                      number.textContent = formatNumber(target);
                  }
              }
              updateCount();
          });
      }

      // Intersection Observer to detect visibility
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  countList.classList.add('on');
                  animateCount();
              } else {
                  countList.classList.remove('on');
                  resetNumbers();
              }
          });
      }, {
          threshold: 0.1 // Adjust threshold as needed
      });
      observer.observe(countList);
  }
}