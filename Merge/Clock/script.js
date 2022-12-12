const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");

function Updateclock(){
    const currentDAte = new Date();

    
    let sec = currentDAte.getSeconds();
    let hour = currentDAte.getHours();
    let min = currentDAte.getMinutes();

    let hourdeg = (hour/12) * 360;
    hourEl.style.transform = `rotate(${hourdeg}deg)`;
    let mindeg = (min/60) * 360;
    minEl.style.transform = `rotate(${mindeg}deg)`;
    let secdeg = (sec/60) * 360;
    secEl.style.transform = `rotate(${secdeg}deg)`;


}

setInterval(Updateclock,1000);
