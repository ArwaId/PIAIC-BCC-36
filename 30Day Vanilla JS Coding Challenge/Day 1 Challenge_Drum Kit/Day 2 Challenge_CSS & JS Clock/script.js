setInterval(setClock,1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondsratio = currentDate.getSeconds() / 60;
    const minratio = (secondsratio + currentDate.getMinutes()) / 60;
    const hourratio = (minratio + currentDate.getHours()) / 12;
    setRotation(secondhand,secondsratio)
    setRotation(minutehand,minratio)
    setRotation(hourhand,hourratio)

}

function setRotation(element, rotationratio) {
    element.style.setProperty('--rotation',rotationratio *360)
}