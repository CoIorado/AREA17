let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        let link = card.querySelector('a');
        link.click();
    });
});

cards.forEach((card) => {
    card.addEventListener('mouseover', (event) => {
        card.style.cursor = "pointer";
        
        let paragraph = card.querySelector('.card-text').firstElementChild;
        paragraph.classList.add('selected-link');
    });
});

cards.forEach((card) => {
    card.addEventListener('mouseout', (event) => {
        let paragraph = card.querySelector('.card-text').firstElementChild;
        paragraph.classList.remove('selected-link');
    });
});