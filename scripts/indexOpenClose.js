const navbarLinks = document.querySelectorAll('.brand-name a, #initial-header.sub-bar li a');
const indexBarLink = document.getElementById('indexBar').parentElement;
const scrollToTopLink = document.getElementById('scroll-top');

function hideElements() {
    gsap.to('.header, #main',
            { opacity: 0, duration: 1, ease: "power1.out" });
}

function showElements() {
    gsap.fromTo('#big-slider *',
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power1.out" });
}

function shrinkPage() {
    gsap.fromTo('#big-slider',
                { width: "100%" },
                { width: "0", duration: 1, ease: "power1.out" });
}

function expandPage() {
    gsap.fromTo('#big-slider',
                { width: "0" },
                { width: "100%", duration: 1, ease: "power1.out" });
}

expandPage();
setTimeout(() => {
    showElements();
}, 700);

/* index bar link reqires additional processing because of very strange shit */
indexBarLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTopLink.click();

    hideElements();

    setTimeout(() => {
        shrinkPage();
    }, 1000);

    setTimeout(() => {
        window.location.href = indexBarLink.href;
    }, 2000);
});

navbarLinks.forEach((link) => {
    if (link.classList.contains('index-link')){
        return;
    }

    link.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToTopLink.click();
    
        hideElements();
    
        setTimeout(() => {
            shrinkPage();
        }, 1000);
    
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 2000);
    });
});