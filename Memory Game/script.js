const cardsEl = document.querySelectorAll(".card");
let card1,card2;

function flipcard(e){
    let clickcard = e.target;
    if(clickcard !== card1)
    clickcard.classList.add('flip');

    if(!card1)
    return card1 =clickcard;
   
    card2=clickcard;
    console.log(card1,card2);
    let card1img = card1.querySelector('img').src;
    let card2img =card2.querySelector('img').src;
    console.log(card1img,card2img);
    matchcards(card1img,card2img);
    
}

function matchcards(img1,img2){
    if (img1 == img2){
        console.log('cards matched');
        card1=card2='';
    }else
    {setTimeout(()=>{
        card1.classList.add('vibration');
        card2.classList.add('vibration');
    },50);
    setTimeout(()=>{
        card1.classList.remove('vibration','flip');
        card2.classList.remove('vibration','flip');
        card1=card2='';
    },1000);
}
}
cardsEl.forEach(card =>{
    card.addEventListener("click",flipcard);
    
})