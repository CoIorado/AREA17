let scrollPositions = Object.freeze({
    top: "top",
    bottom: "bottom"
});

const bgBlurHeader = document.querySelector('.bg-blur');

//initial scroll position of the window
let lastScrollTop = 0;

/* Returns TRUE if user is scrolling down and FALSE otherwise */
function isScrollingDown() {
    let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop; 
    let result = currentScrollPos > lastScrollTop;

    lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;

    return result;
}

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

//initial position (let's say it's on top)
let scrollOnTop = true;

/* Returns TRUE if user scrolls from top to bottom relative to the element scrollPos */
function isTopToBottom() {
    const scrollPos = document.querySelector('#main > div:nth-child(2)');

    if (window.scrollY >= scrollPos.offsetTop && scrollOnTop) {
        scrollOnTop = false;
        return true;
    }
    else if (window.scrollY < scrollPos.offsetTop && !scrollOnTop) {
        scrollOnTop = true;
        return false;
    }
}

/* Shows and hides .bg-blur header */
function changeHeader() {
    if (isTopToBottom()) {
        return;
    }

    if (getScrollPosition() === scrollPositions.bottom) {
        if (!isScrollingDown()) {
            if (bgBlurHeader.classList.contains('closed')) {
                bgBlurHeader.classList.remove('closed');
                bgBlurHeader.classList.add('opened');
    
                bgBlurHeader.style.display = "initial";
                gsap.fromTo('.bg-blur',
                            { yPercent: -100},
                            { yPercent: 0, duration: 0.3 });
            }
        }
        else {
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
    }
    
    if (getScrollPosition() === scrollPositions.top && bgBlurHeader.classList.contains('opened')) {
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