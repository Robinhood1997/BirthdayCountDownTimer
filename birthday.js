const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const miutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const dummyDate = '14 april ' + new Date().getFullYear();

function countDown() {
    const newDate = new Date();
    const birthdayDate = new Date(dummyDate);
    const totalSeconds = Math.floor((birthdayDate - newDate) / 1000);
    const seconds = Math.floor((totalSeconds) % 60)
    const totalMinutes = Math.floor((totalSeconds / 60) % 60);
    const totalHours = Math.floor((totalSeconds / 3600) % 24);
    const totalDays = Math.floor(totalSeconds / 3600 / 24);
    daysElement.innerHTML = totalDays;
    hoursElement.innerHTML = totalHours;
    miutesElement.innerHTML = totalMinutes;
    secondsElement.innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);