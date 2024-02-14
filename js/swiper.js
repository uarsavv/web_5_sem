var swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,

    autoplay: {
        delay: 2500,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,

    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    effect: 'flip',
    flipEffect: {
        slideShadows: false,
    },

});