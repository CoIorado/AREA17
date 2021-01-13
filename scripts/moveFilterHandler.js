const filterHandler = document.querySelector('ul#scroll-header .filter-handler');
const initialPlace = document.querySelector('ul#scroll-header > li.sub-item:nth-child(2)');
const finalPlace = document.querySelector('.bg-blur .mobile-only');
const arrow = finalPlace.lastElementChild;

const bgBlur = document.querySelector('#index-wrapper .bg-blur');
const navBar = document.querySelector('#index-wrapper .nav-bar');

let flag = true;

function changeContent() {
    if (window.innerWidth <= 550 && flag) {
        initialPlace.removeChild(filterHandler);
        finalPlace.removeChild(arrow);
        finalPlace.appendChild(filterHandler);
        finalPlace.appendChild(arrow);

        bgBlur.style.height = "10vh";
        bgBlur.style.maxHeight = "70px";
        navBar.style.height = "";

        flag = false;
    }
    else if (window.innerWidth > 550 && !flag) {
        finalPlace.removeChild(filterHandler);
        initialPlace.appendChild(filterHandler);

        bgBlur.style.height = "";
        bgBlur.style.maxHeight = "";
        navBar.style.height = "";

        flag = true;
    }

    if (window.innerWidth < 330) {
        arrow.style.display = "none";
    }
    else {
        arrow.style.display = "flex";
    }
}

changeContent();
window.addEventListener('resize', changeContent);