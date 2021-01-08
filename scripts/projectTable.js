const projectList = document.querySelectorAll('#project-list li');

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
        button.addEventListener('click', () => {
            allSpans.forEach((span) => span.classList.remove('inactive'));
            strategySpans.forEach((span) => span.classList.add('inactive'));
            designSpans.forEach((span) => span.classList.add('inactive'));
            engineeringSpans.forEach((span) => span.classList.add('inactive'));

            showAllProjects();
        });
    });

    strategyButtons.forEach((button) => {
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

        if (subItem.firstElementChild.className === "filter-handler") {
            subItem.style.width = "calc(27.5% + 76px)";
        }
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

            if (headerBlur.style.height != "70px"){
                gsap.fromTo('#index-wrapper #scroll-header .filter-handler .hidden',
                            { opacity: 1},
                            { opacity: 0, duration: 0.5, ease: "power3.out" });
                gsap.to('#index-wrapper .bg-blur',
                        { height: "70px", duration: 0.5, ease: "power3.out" });
                gsap.to('#index-wrapper .nav-bar',
                        { height: "70px", duration: 0.5, ease: "power3.out" });
            }

            scrollAbove = true;
        }
    });
}

/* Adds .filter-handler expanding effect when user puts mouse over and out of .filter-handler span */
function expandFilterSpan() {
    const filterHandler = document.querySelector('#scroll-header .filter-handler');
    const hiddenButtons = filterHandler.querySelector('.hidden');
    const headerBlur = document.querySelector('#index-wrapper .bg-blur');

    filterHandler.addEventListener('mouseenter', () => {
        hiddenButtons.style.display = "flex";

        gsap.fromTo('#index-wrapper #scroll-header .filter-handler .hidden',
                    { opacity: 0},
                    { opacity: 1, duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .bg-blur',
                { height: "162px", duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .nav-bar',
                { height: "162px", duration: 0.5, ease: "power4.out" });
    });

    filterHandler.addEventListener('mouseleave', () => {
        gsap.fromTo('#index-wrapper #scroll-header .filter-handler .hidden',
                    { opacity: 1},
                    { opacity: 0, duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .bg-blur',
                { height: "70px", duration: 0.5, ease: "power4.out" });
        gsap.to('#index-wrapper .nav-bar',
                { height: "70px", duration: 0.5, ease: "power4.out" });
    });
}

showAllProjects();
addFilter();

expandLinkArea();

addScrollTrigger();

expandFilterSpan();