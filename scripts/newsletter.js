/* creates a yellow slide-up panel with Email field and Submit button */
function createSubscribePanel() {
    let subscribePanel = document.createElement('div');
    subscribePanel.id = "subscribe-panel";
    subscribePanel.classList.add('slide-up-animation');
    subscribePanel.classList.add('new');                                //flag for correct closing this element later

    let subscribePanelContent = document.createElement('div');
    subscribePanelContent.classList.add('subscribe-panel-content');

    let title = document.createElement('span');
    title.textContent = "Newsletter";

    let form = document.createElement('form');
    form.name = "subscribe-newsletter";

    let input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Email address";

    let button = document.createElement('button');
    button.type = "Submit";
    button.textContent = "Submit";

    form.appendChild(input);
    form.appendChild(button);

    subscribePanelContent.appendChild(title);
    subscribePanelContent.appendChild(form);

    subscribePanel.appendChild(subscribePanelContent);

    return subscribePanel;
}

function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function closeSubscribePanel() {
    let subscribePanel = document.getElementById('subscribe-panel');
    let footer = document.querySelector('footer');

    if (subscribePanel.classList.contains('new')) {
        return;
    }

    subscribePanel.classList.add('slide-down-animation');
    setTimeout(() => {
        footer.removeChild(subscribePanel);
    }, 400);
}

let clickCount = 0;
let newsletterButton = document.getElementById('newsletter');
newsletterButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount > 1) {
        return;
    }

    let subscribePanel = createSubscribePanel();
    let footer = document.querySelector('footer');
    footer.appendChild(subscribePanel);

    let textLabel = subscribePanel.firstElementChild.querySelector('span');
    let form = document.forms["subscribe-newsletter"];
    let input = form.querySelector('input');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        input.addEventListener('focus', (e) => {
            textLabel.style.color = "black";
            textLabel.textContent = "Newsletter";
        });

        const userEmail = input.value;
        const isCorrect = validateEmail(userEmail);
        let userSubscribed = false;

        if (isCorrect) {
            //here add user email to database

            subscribePanel.style.backgroundColor = "#2ecc71";
            form.style.display = "none";
            textLabel.style.width = "100%";
            textLabel.style.color = "black";
            textLabel.textContent = "Thank you for your subscription";
            userSubscribed = true;

            setTimeout(() => {
                subscribePanel.classList.remove('new');
                closeSubscribePanel();
                clickCount = 0;
            }, 3000);
        }
        else {
            textLabel.style.color = "red";
            textLabel.textContent = "Invalid address";
        }
    });
    
    let wrapper = document.getElementById('wrapper');
    Array.from(wrapper.children).forEach((element) => {
        if (element.tagName.toLowerCase() !== "footer") {
            element.addEventListener('click', () => {
                subscribePanel.classList.remove('new');
                closeSubscribePanel();
                clickCount = 0;
            });
        }
    });
});