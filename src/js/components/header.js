document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const logoBig = document.querySelector('#logoBig');
    const logoSm = document.querySelector('#logoSm');
    const burgerBtn = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.header__overlay')

    burgerBtn.addEventListener('click', () => {
        workWithBurger();
    });

    overlay.addEventListener('click', () => {
        workWithBurger();
    })

    document.addEventListener('scroll', () => {
        const bodyScroll = window.pageYOffset;

        if (bodyScroll != 0 && !(window.innerWidth <= 900)) {
            if (!header.classList.contains('scroll')) {
                header.classList.add('scroll');
            }
            if (!logoBig.classList.contains('scroll')) {
                logoBig.classList.add('scroll');
            }
            if (!logoSm.classList.contains('scroll')) {
                logoSm.classList.add('scroll');
            }
        } else {
            if (header.classList.contains('scroll')) {
                header.classList.remove('scroll')
            }
            if (logoBig.classList.contains('scroll')) {
                logoBig.classList.remove('scroll');
            }
            if (logoSm.classList.contains('scroll')) {
                logoSm.classList.remove('scroll');
            }
        }

        bodyScroll != 0 ?
            header.classList.contains('scroll') ? true : header.classList.add('scroll') :
            header.classList.contains('scroll') ? header.classList.remove('scroll') : false;
    })

    const workWithBurger = () => {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('overflow');
        overlay.classList.toggle('active');
    }
});