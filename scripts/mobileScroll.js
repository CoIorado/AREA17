let scrollPositions = Object.freeze({
    top: "top",
    bottom: "bottom"
});

const bgBlurHeader = document.querySelector('.bg-blur');

/* Returns current position ("top" or "bottom") relative to the element scrollPos */
function getScrollPosition() {
    const scrollPos = document.querySelector('#main > div:nth-child(2)');

    if (window.scrollY >= scrollPos.offsetTop) {
        return scrollPositions.bottom;
    }
    else {
        return scrollPositions.top;
    }
}

/* Shows .bg-blur header */
function showHeader() {
    if (bgBlurHeader.classList.contains('closed')) {
        bgBlurHeader.classList.remove('closed');
        bgBlurHeader.classList.add('opened');

        bgBlurHeader.style.display = "initial";
        gsap.fromTo('.bg-blur',
                    { yPercent: -100},
                    { yPercent: 0, duration: 0.3 });
    }
}

/* Hides .bg-blur header */
function hideHeader() {
    if (bgBlurHeader.classList.contains('opened')) {
        bgBlurHeader.classList.remove('opened');
        bgBlurHeader.classList.add('closed');

        setTimeout(() => {
            bgBlurHeader.style.display = "none";
        }, 300);
        gsap.fromTo('.bg-blur',
                    { yPercent: 0},
                    { yPercent: -100, duration: 0.3 });
    }
}

/* Shows and hides .bg-blur header depending on scroll position relative to #main > div:nth-child(2) element */
function changeHeader() {
    if (getScrollPosition() === scrollPositions.bottom) {
        showHeader();
    }
    else if (getScrollPosition() === scrollPositions.top) {
        hideHeader();
    }
}

/* Adds or removes scroll event listener depending on screen width (media query in JS) */
function addRemoveScrollEvent() {
    if (window.innerWidth <= 550) {
        bgBlurHeader.style.display = "none";
        bgBlurHeader.classList.add('closed');

        document.addEventListener('scroll', changeHeader)
    }
    else {
        bgBlurHeader.style.transform = "unset";
        bgBlurHeader.style.display = "initial";
        bgBlurHeader.classList.remove('closed');

        document.removeEventListener('scroll', changeHeader);
    }
}

//firstly add event when doc is loaded
addRemoveScrollEvent();
//then attach adding and removing the scroll event when user resises the window
window.addEventListener('resize', addRemoveScrollEvent);