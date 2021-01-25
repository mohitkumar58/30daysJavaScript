const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const date = document.querySelector('.date');


function setDate() {
    const nowDate = new Date();

    date.innerHTML = nowDate.toLocaleString();

    const seconds = nowDate.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = nowDate.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = nowDate.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);