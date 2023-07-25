const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.menu-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute("aria-expanded", "true")
    } else {
        primaryNav.setAttribute('data-visible', "false");
        navToggle.setAttribute("aria-expanded", "false")
    }

})

window.addEventListener("load", changeSrc => {
    const scrnSize = window.innerWidth;
    const img = document.querySelector('.article-img');
    if (scrnSize <= 1000) {
        img.setAttribute('src',"assets/images/image-web-3-mobile.jpg") ;
    } else {
        img.setAttribute('src',"assets/images/image-web-3-desktop.jpg") ;    
    }
})

window.addEventListener("resize", changeSrc => {
    const scrnSize = window.innerWidth;
    const img = document.querySelector('.article-img');
    if (scrnSize <= 1000) {
        img.setAttribute('src',"assets/images/image-web-3-mobile.jpg") ;
    } else {
        img.setAttribute('src',"assets/images/image-web-3-desktop.jpg") ;    
    }
})