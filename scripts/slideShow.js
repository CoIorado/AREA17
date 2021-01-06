const slideshow = document.querySelector('.slideshow');
const slides = slideshow.children;

function showSlide(index) {
    gsap.fromTo(`.slideshow img:nth-child(${index + 1})`,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power4.out" });
}

function hideSlide(index) {
    gsap.fromTo(`.slideshow img:nth-child(${index + 1})`,
                { opacity: 1 },
                { opacity: 0, duration: 1, ease: "power4.out" });
}

function nextSlide() {
    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.opacity !== "0") {
            hideSlide(i);

            if (i != slides.length - 1) {
                showSlide(i + 1);
            }
            else {
                showSlide(0);
            }

            return;
        }
    }
}

showSlide(0);
setInterval(() => {
    nextSlide();
}, 5000);