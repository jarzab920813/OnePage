// document.querySelectorAll('a[href^="#"]').forEach($anchor => {
//     $anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start' //scroll to top of the target element
//         });
//     });
// });

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'linear');
});