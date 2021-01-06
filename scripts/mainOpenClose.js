const indexBarLink = document.getElementById('indexBar').parentElement;
const scrollToTopLink = document.getElementById('scroll-top');

function hideElements() {
    gsap.to('.header, #main, #journal, footer',
            { opacity: 0, duration: 1, ease: "power1.out" });
}

function showElements() {
    gsap.fromTo('.header, #main, #journal, footer',
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power1.out" });
}

showElements();

indexBarLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTopLink.click();

    hideElements();

    setTimeout(() => {
        window.location.href = indexBarLink.href;
    }, 1000);
});
