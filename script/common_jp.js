


document.addEventListener("DOMContentLoaded", function(e){
    animationOnHandler();
    headerScrollHandler();
    bodyScroll();
    privacyUsePopup();
    scroll_move();
})
document.addEventListener("scroll", function(){
    animationOnHandler();
})


const privacyUsePopup = () => {
    $('.privacyPopupBtn').click(function(){
        $('#privacyPopup').addClass('active');
    })
    $('.usePopupBtn').click(function(){
        $('#usePopup').addClass('active');
    })
    $('.privacyPopup .contentWrap .titleBox .closeBtn').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup').click(function(){
        $('.privacyPopup').removeClass('active')
    })
    $('.privacyPopup .contentWrap').click(function(e){
        e.stopPropagation()
    })
}

const scroll_move = () => {
    $(".scroll_move").click(function(e){  
        var header_height = $('header').outerHeight(true);
        e.preventDefault();       
        $('html,body').animate({scrollTop:$(this.hash).offset().top - header_height}, 1000);
        $('.close-menu-bg').removeClass('show');
        $('.right-slide-menu').removeClass('show');
    });
}

const bodyScroll = () => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,         // ← 숫자 높을수록 감속이 강해짐
        effects: true,        // 패럴럭스 같은 ScrollTrigger 효과 활성화
        ease: "power4.out", // 더 강한 감속 (추천)
        autoKill: false // 스크롤 중단 방지
    });
}
const headerScrollHandler = () => {
    /* header */
    const header_main = document.querySelector('header');

    if(header_main){
        document.addEventListener("scroll", function(){
            let scroll_top = window.scrollY;
            if(scroll_top > 0){
                header_main.classList.add("on");
            }else{
                header_main.classList.remove("on");
            }
        })
    }
}
const animationOnHandler = () => {
    const countList = document.querySelectorAll('.ani');
    if (countList.length) {
        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                } else {
                    entry.target.classList.remove('on');
                }
            });
        }, {
            threshold: 0.1 // Adjust threshold as needed
        });
        
        // Observe each .ani element
        countList.forEach(element => observer.observe(element));
    }
}