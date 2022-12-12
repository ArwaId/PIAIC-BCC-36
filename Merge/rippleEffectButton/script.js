const btnEL = document.querySelector('.btn');

btnEL.addEventListener("mouseover",(e)=>{
const y = (e.pageY - btnEL.offsetTop );
const x = (e.pageX - btnEL.offsetLeft );
btnEL.style.setProperty("--yPos", y + "px");
btnEL.style.setProperty("--xPos", x + "px");

})