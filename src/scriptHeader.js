$(document).ready(function() {
    $(".header-wrap-mobile input + label" ).click(function() {
        $(this).toggleClass("fixed");
    });
    $('.clients-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        variableWidth: true
      });
});