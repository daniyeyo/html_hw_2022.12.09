$(function () {
    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });
    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        trueauopSpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


})

$('h1').on('click', function () {
    console.log('작동함')
})


// $(window).on('scroll', function () {
//     console.log('스크롤 :', $(window).scrollTop())

//     if ($(window).scrollTop() > 0) {
//         $('.header_scroll').addClass('on')
//     } else {
//         $('.header_scroll').removeClass('on')
//     }
// })
