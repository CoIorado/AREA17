const numbers = document.querySelectorAll('.activity-fields li .number');

numbers.forEach(number => {
    const text = number.parentElement.nextElementSibling;
    const title = number.nextElementSibling;

    title.addEventListener('mouseover', () => {
        title.style.boxShadow = "inset 0 -1px deeppink";
    });

    title.addEventListener('mouseout', () => {
        title.style.boxShadow = "inset 0 -1px black";
    });

    title.addEventListener('click', () => {
        if (text.style.display === "none") {
            /* expand only one item on click */
            const allTexts = document.querySelectorAll('.activity-fields li .activity-text');
            elementNumber = 0;
            allTexts.forEach(txt => {
                elementNumber++;
                if (txt === text) {
                    txt.style.display = "initial";
                    gsap.fromTo(`.activity-fields li:nth-child(${elementNumber}) .activity-text p`, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, stagger: 0.2 });
                }
                else {
                    txt.style.display = "none";
                }
            });
        }
        else {
            text.style.display = "none";
        }
    });

    number.addEventListener('mouseover', () => {
        title.style.boxShadow = "inset 0 -1px deeppink";
    });

    number.addEventListener('mouseout', () => {
        title.style.boxShadow = "inset 0 -1px black";
    });

    number.addEventListener('click', () => {
        title.click();
    });
});
