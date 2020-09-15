$('.slide-content').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    pauseOnHover: false
});
$('.what-case').slick({
    arrows: true,
    dots: true
});
let arrowLeft = document.querySelector('.what-case .slick-prev');
let arrowRight = document.querySelector('.what-case .slick-next');
arrowLeft.innerHTML = '<span class="arrowLeft"></span>';
arrowRight.innerHTML = '<span class="arrowRight"></span>';
var Scroll = document.querySelector('.scroll');
$('#scroll').click(function () {
    $('html, body').animate({
        scrollTop: $("#what").offset().top
    }, 1000);
});

$('.slide-content').on('beforeChange', function(event,
    slick,
    currentSlide,
    nextSlide){
    slick.$slides.eq(nextSlide).addClass("active");
      if (currentSlide === 3) {
        $.each($(".slide-content .content"), function () {
          $(this).data("slick-index") === 4
            ? $(this).addClass("active")
            : "";
        });
      }
});
$('.slide-content').on('afterChange', function(event,
    slick,
    currentSlide){
    slick.$slides.eq(currentSlide - 1).removeClass("active");
});