const projectList = document.querySelectorAll('#project-list li');

/* Function that uses regex which returns a true or false value depending on whether or not the user is browsing with a mobile. */
window.isMobile = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

/* Expands "clickable" area of Projects table's rows */
function expandLinkArea() {
    projectList.forEach((listItem) => {
        const link = listItem.querySelector('a');
        const arrow = listItem.querySelector('.arrow');

        if (listItem.classList.contains('absent')) {
            link.style.pointerEvents = "none";
            return;
        }
    
        listItem.addEventListener('mouseover', () => {
            link.classList.add('selected-link');
            arrow.style.visibility = "visible";
        });
    
        listItem.addEventListener('mouseout', () => {
            link.classList.remove('selected-link');
            arrow.style.visibility = "hidden";
        });
    
        listItem.addEventListener('click', () => {
            link.click();
        });
    });
}

/* Returns default light-gray color for spans in .project-types element (is used in show projects functions) */
function clearColors() {
    projectList.forEach((listItem) => {
        listItem.querySelectorAll('.project-types > span').forEach((element) => {
            element.style.color = "rgb(100, 100, 100)";
        });
    });
}

/* Shows all rows of Projects table */
function showAllProjects() {
    projectList.forEach((listItem) => {
        listItem.style.display = "flex";
    });

    clearColors();
}

/* Shows rows of Projects table which contain .strategy class */
function showStrategyProjects() {
    clearColors();

    projectList.forEach((listItem) => {
        hasStrategy = listItem.querySelector('.project-types .strategy') !== null;

        if (hasStrategy) {
            listItem.style.display = "flex";

            listItem.querySelectorAll('.project-types > span').forEach((element) => {
                if (element.className !== "strategy") {
                    element.style.color = "rgb(50, 50, 50)";
                }
            });
        }
        else {
            listItem.style.display = "none";
        }
    });
}

/* Shows rows of Projects table which contain .design class */
function showDesignProjects() {
    clearColors();

    projectList.forEach((listItem) => {
        hasDesign = listItem.querySelector('.project-types .design') !== null;

        if (hasDesign) {
            listItem.style.display = "flex";

            listItem.querySelectorAll('.project-types > span').forEach((element) => {
                if (element.className !== "design") {
                    element.style.color = "rgb(50, 50, 50)";
                }
            });
        }
        else {
            listItem.style.display = "none";
        }
    });
}

/* Shows rows of Projects table which contain .engineering class */
function showEngineeringProjects() {
    clearColors();

    projectList.forEach((listItem) => {
        hasEngineering = listItem.querySelector('.project-types .engineering') !== null;

        if (hasEngineering) {
            listItem.style.display = "flex";

            listItem.querySelectorAll('.project-types > span').forEach((element) => {
                if (element.className !== "engineering") {
                    element.style.color = "rgb(50, 50, 50)";
                }
            });
        }
        else {
            listItem.style.display = "none";
        }
    });
}

/* Attachs show functions to all .filter-handler buttons */
function addFilter() {
    const allSpans = document.querySelectorAll('.all');
    const strategySpans = document.querySelectorAll('.strategy');
    const designSpans = document.querySelectorAll('.design');
    const engineeringSpans = document.querySelectorAll('.engineering');

    const allButtons = document.querySelectorAll('.all a');
    const strategyButtons = document.querySelectorAll('.strategy a');
    const designButtons = document.querySelectorAll('.design a');
    const engineeringButtons = document.querySelectorAll('.engineering a');

    allButtons.forEach((button) => {
        if (!window.isMobile() && document.querySelector('.header').contains(button) || document.getElementById('title').contains(button)) {
            button.style.pointerEvents = "initial";
        }

        button.addEventListener('click', () => {
            allSpans.forEach((span) => span.classList.remove('inactive'));
            strategySpans.forEach((span) => span.classList.add('inactive'));
            designSpans.forEach((span) => span.classList.add('inactive'));
            engineeringSpans.forEach((span) => span.classList.add('inactive'));

            showAllProjects();
        });
    });

    strategyButtons.forEach((button) => {
        if (!window.isMobile() && document.querySelector('.header').contains(button) || document.getElementById('title').contains(button)) {
            button.style.pointerEvents = "initial";
        }

        button.addEventListener('click', () => {
            allSpans.forEach((span) => span.classList.add('inactive'));
            strategySpans.forEach((span) => span.classList.remove('inactive'));
            designSpans.forEach((span) => span.classList.add('inactive'));
            engineeringSpans.forEach((span) => span.classList.add('inactive'));

            showStrategyProjects();
        });
    })

    designButtons.forEach((button) => {
        button.addEventListener('click', () => {
            allSpans.forEach((span) => span.classList.add('inactive'));
            strategySpans.forEach((span) => span.classList.add('inactive'));
            designSpans.forEach((span) => span.classList.remove('inactive'));
            engineeringSpans.forEach((span) => span.classList.add('inactive'));

            showDesignProjects();
        });
    })

    engineeringButtons.forEach((button) => {
        button.addEventListener('click', () => {
            allSpans.forEach((span) => span.classList.add('inactive'));
            strategySpans.forEach((span) => span.classList.add('inactive'));
            designSpans.forEach((span) => span.classList.add('inactive'));
            engineeringSpans.forEach((span) => span.classList.remove('inactive'));

            showEngineeringProjects();
        });
    })
}

//flag for processing scroll event only once
let scrollAbove = true;

/* Adds header changing effect when user scrolls page above a particular position */
/* (in out case this pisition is on top of Projects table) */
function addScrollTrigger() {
    const initialHeader = document.querySelector('#initial-header');
    const scrollHeader = document.querySelector('#scroll-header');
    const scrollPos = document.getElementById('scroll-position');
    const headerBlur = document.querySelector('#index-wrapper .bg-blur');

    scrollHeader.style.justifyContent = "space-between";
    scrollHeader.querySelectorAll('.sub-item').forEach((subItem) => {
        subItem.style.marginRight = "0"
    });

    document.addEventListener('scroll', () => {
        if (window.scrollY >= scrollPos.offsetTop && scrollAbove) {
            scrollHeader.style.display = "flex";
            gsap.fromTo('#scroll-header',
                        { yPercent: 100 },
                        { yPercent: 0, duration: 0.5, ease: "power3.out" });

            initialHeader.style.display = "none";

            scrollAbove = false;
        }
        else if (window.scrollY < scrollPos.offsetTop && !scrollAbove) {
            initialHeader.style.display = "flex";

            gsap.fromTo('#initial-header',
                        { yPercent: -100 },
                        { yPercent: 0, duration: 0.5, ease: "power3.out" });

            scrollHeader.style.display = "none";

            if (headerBlur.style.height != getInitialHeight()){
                closeHeader();
            }

            if (window.isMobile()) {
                const filterHandler = document.querySelector('.header .filter-handler');
                filterHandler.querySelectorAll('span > a').forEach((button) => {
                    button.style.pointerEvents = "none";
                })
            }

            scrollAbove = true;
        }
    });
}

/* Calculates height depending on window width and returns it */
function calculateHeight() {
    if (window.innerWidth > 1330) {
        return "162px";
    }
    else if (window.innerWidth > 1080) {
        return "156px";
    }
    else if (window.innerWidth > 850) {
        return "150px";
    }
    else {
        return "142px";
    }
}

/* Gets initial height of .nav-bar and .bg-blur depending or window width and returns it */
function getInitialHeight() {
    if (window.innerWidth > 1300) {
        return "70px";
    }
    else if (window.innerWidth > 550) {
        return "65px";
    }
    else {
        return "10vh";
    }
}

function openHeader() {
    const filterHandler = document.querySelector('.header .filter-handler');
    const hiddenButtons = filterHandler.querySelector('.hidden');

    if (window.isMobile()) {
        hiddenButtons.classList.add('shown');
        hiddenButtons.style.display = "flex";

        let height = calculateHeight();

        gsap.fromTo('#index-wrapper .header .filter-handler .hidden',
                    { opacity: 0},
                    { opacity: 1, duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .bg-blur',
                { height: height, duration: 0.5, ease: "power4.out" });

        if (window.innerWidth > 550) {
            gsap.to('#index-wrapper .nav-bar',
            { height: height, duration: 0.5, ease: "power4.out" });
        }

        filterHandler.querySelectorAll('span > a').forEach((button) => {
            button.style.pointerEvents = "initial";
        })
    }
    else {
        hiddenButtons.style.display = "flex";

        let height = calculateHeight();

        gsap.fromTo('#index-wrapper .header .filter-handler .hidden',
                    { opacity: 0},
                    { opacity: 1, duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .bg-blur',
                { height: height, duration: 0.5, ease: "power4.out" });

        if (window.innerWidth > 550) {
            gsap.to('#index-wrapper .nav-bar',
            { height: height, duration: 0.5, ease: "power4.out" });
        }
    }
}

function closeHeader() {
    const filterHandler = document.querySelector('.header .filter-handler');
    const hiddenButtons = filterHandler.querySelector('.hidden');

    if (window.isMobile()) {
        if (!hiddenButtons.classList.contains('shown')) {
            return;
        }
        
        let initialHeight = getInitialHeight();

        setTimeout(() => {
            hiddenButtons.style.display = "none";
        }, 500);
        gsap.fromTo('#index-wrapper .header .filter-handler .hidden',
                    { opacity: 1},
                    { opacity: 0, duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .bg-blur',
                { height: initialHeight, duration: 1, ease: "power4.out" });

        if (window.innerWidth > 550) {
            gsap.to('#index-wrapper .nav-bar',
                    { height: initialHeight, duration: 1, ease: "power4.out" });
        }

        filterHandler.querySelectorAll('span > a').forEach((button) => {
            button.style.pointerEvents = "none";
        })

        hiddenButtons.classList.remove('shown');
    }
    else {
        let initialHeight = getInitialHeight();

        gsap.fromTo('#index-wrapper .header .filter-handler .hidden',
                    { opacity: 1},
                    { opacity: 0, duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .bg-blur',
                { height: initialHeight, duration: 0.5, ease: "power4.out" });

        if (window.innerWidth > 550) {
            gsap.to('#index-wrapper .nav-bar',
                { height: initialHeight, duration: 0.5, ease: "power4.out" });
        }
    }
}

/* Adds .filter-handler expanding effect when user puts mouse over and out of .filter-handler span */
function expandFilterSpan() {
    const filterHandler = document.querySelector('.header .filter-handler');
    const indexWrapper = document.getElementById('index-wrapper');

    //if mobile version
    if (window.isMobile()) {
        filterHandler.addEventListener('click', openHeader);
        indexWrapper.addEventListener('touchmove', closeHeader);
        window.addEventListener('scroll', closeHeader);
    }
    //if desktop version
    else {
        filterHandler.addEventListener('mouseenter', openHeader);
        filterHandler.addEventListener('mouseleave', closeHeader);
    }
}

showAllProjects();
addFilter();

expandLinkArea();

addScrollTrigger();

expandFilterSpan();