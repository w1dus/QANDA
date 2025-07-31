

document.addEventListener("DOMContentLoaded", function(e){
  slideMenuToggleHandler();
  yotubeBackground_player();
})

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
