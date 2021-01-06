const freelanceList = document.querySelectorAll('ul.freelance li');

for (i = 1; i < freelanceList.length; i++) {
    const paragraph = freelanceList[i].querySelector('p.freelance-link');

    freelanceList[i].addEventListener('click', (event) => {
        paragraph.firstElementChild.click();
    });

    freelanceList[i].addEventListener('mouseover', (event) => {
        paragraph.classList.add('selected-link');
    });

    freelanceList[i].addEventListener('mouseout', (event) => {
        paragraph.classList.remove('selected-link');
    });
}