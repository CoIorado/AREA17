let localeFormat = Object.freeze({
    USA: "en-US",
    France: "fr-FR"
});

function getCurrentTime(timeFormat) {
    let newYorkTime, parisTime;

    if (timeFormat === localeFormat.USA) {
        let time = new Date(Date.now());
        let hour = time.toLocaleTimeString(timeFormat, { timeZone: "America/New_York", hour: "2-digit"});
        let minute = time.toLocaleTimeString(timeFormat, { timeZone: "America/New_York", minute: "2-digit"});

        if (minute < 10) {
            minute = "0" + minute;
        }

        newYorkTime = {
            hour: hour.substring(0, 2),
            minute: minute,
            dayPart: hour.substring(hour.length - 2)
        }

        hour = time.toLocaleTimeString(timeFormat, { timeZone: "Europe/Paris", hour: "2-digit"});
        minute = time.toLocaleTimeString(timeFormat, { timeZone: "Europe/Paris", minute: "2-digit"});

        if (minute < 10) {
            minute = "0" + minute;
        }

        parisTime = {
            hour: hour.substring(0, 2),
            minute: minute,
            dayPart: hour.substring(hour.length - 2)
        }
    }
    else if (timeFormat === localeFormat.France) {
        let time = new Date(Date.now());
        let hour = time.toLocaleTimeString(timeFormat, { timeZone: "America/New_York", hour: "2-digit"});
        let minute = time.toLocaleTimeString(timeFormat, { timeZone: "America/New_York", minute: "2-digit"});

        if (minute < 10) {
            minute = "0" + minute;
        }

        newYorkTime = {
            hour: hour.substring(0, 2),
            minute: minute,
        }

        hour = time.toLocaleTimeString(timeFormat, { timeZone: "Europe/Paris", hour: "2-digit"});
        minute = time.toLocaleTimeString(timeFormat, { timeZone: "Europe/Paris", minute: "2-digit"});

        if (minute < 10) {
            minute = "0" + minute;
        }

        parisTime = {
            hour: hour.substring(0, 2),
            minute: minute,
        }
    }

    return {
        NewYork: newYorkTime,
        Paris: parisTime
    }
}

/* sets time in clocks depending on locale format */
function setTime() {
    /* if website is in English version, then set 12hour time format */ 
    let englishLink = document.getElementById('eng');
    if (englishLink.classList.contains('inactive')) {
        let currentTime = getCurrentTime(localeFormat.USA);

        let hours = document.querySelectorAll(".clocks div .hour");
        let minutes = document.querySelectorAll(".clocks div .minute");

        hours[0].textContent = currentTime.NewYork.hour;
        hours[1].textContent = currentTime.Paris.hour;
        minutes[0].textContent = currentTime.NewYork.minute + " " + currentTime.NewYork.dayPart.toLowerCase();
        minutes[1].textContent = currentTime.Paris.minute + " " + currentTime.Paris.dayPart.toLowerCase();
    }

    /* if website is in Russian version, then set 24hour time format */ 
    let frenchLink = document.getElementById('french');
    if (frenchLink.classList.contains('inactive')) {
        let currentTime = getCurrentTime(localeFormat.France);
        
        let hours = document.querySelectorAll(".clocks div .hour");
        let minutes = document.querySelectorAll(".clocks div .minute");

        hours[0].textContent = currentTime.NewYork.hour;
        hours[1].textContent = currentTime.Paris.hour;
        minutes[0].textContent = currentTime.NewYork.minute;
        minutes[1].textContent = currentTime.Paris.minute;
    }
}

setTime();
setInterval(() => {
    setTime();
}, 1000);