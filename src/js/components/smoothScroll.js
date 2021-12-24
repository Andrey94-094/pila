let _config = {
    selector: 'a[href^="#"]',
    offsetTop: 0
}

export default (config = {}) => {
    _config = {..._config, ...config }
    Array.prototype.forEach.call(document.querySelectorAll(_config.selector), el => {
        el.addEventListener('click', ev => {
            if (typeof el.hash !== "undefined" && document.querySelector(el.hash) !== null) {
                ev.preventDefault()
                let scrollOptions = { left: 0, top: 0, behavior: 'smooth' }
                scrollOptions.top = document.querySelector(el.hash).offsetTop - _config.offsetTop;
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo(scrollOptions)
                } else {
                    window.scrollTo(0, scrollOptions.top)
                }
            }
        })
    })
}