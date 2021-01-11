const indexLinks = document.querySelectorAll('.index-link');
const scrollToTopLink = document.getElementById('scroll-top');

function hideElements() {
    gsap.to('.nav-bar, .clocks, #main, #journal, footer',
            { opacity: 0, duration: 1, ease: "power1.out" });
}

function showElements() {
    gsap.fromTo('.nav-bar, .clocks, #main, #journal, footer',
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power1.out" });
}

showElements();

indexLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        scrollToTopLink.click();
        hideElements();
    
        setTimeout(() => {
            window.location.href = link.href;
        }, 1000);
    });
});
