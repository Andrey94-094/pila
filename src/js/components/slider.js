document.addEventListener('DOMContentLoaded', () => {
    sliderInit();

    document.querySelector('.catalog__item-link').addEventListener('click', () => {

        setInterval(() => {
            $('.modalCatalog__slider').slick('setPosition')
        }, 50);
    })
});

const sliderInit = () => {
    $('.modalCatalog__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        fade: true,

        nextArrow: '<button class="arrow  arrow--next"><svg class="arrow-icon"><use xlink:href="#arrow"></use></svg></button>',
        prevArrow: '<button class="arrow  arrow--prev"><svg class="arrow-icon"><use xlink:href="#arrow"></use></svg></button>'
    });
}