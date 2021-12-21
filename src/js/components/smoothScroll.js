document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.smoothscroll').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: document.getElementById(item.getAttribute('href')).offsetTop,
                behavior: "smooth"
            });
        });
    })
});