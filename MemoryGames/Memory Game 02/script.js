let first = "";
let second = "";
let counter =0;

const cardsEl = document.querySelectorAll(".card");

cardsEl.forEach(card => {
   
    card.addEventListener("click",()=>{
        if(counter == 0){
            first = card;
            first.classList.add("flip");
            counter++;
        }else{
            second = card;
            second.classList.add("flip");
            counter =0;
            let cardarray =[first,second];
            
            if(first.getAttribute("name") === second.getAttribute("name")){
                cardarray[0].classList.add("clicked");
                cardarray[1].classList.add("clicked");
                cardarray =["",""];

            }       else{
                cardarray[0].classList.add("shake");
                cardarray[1].classList.add("shake");
                
                
                setTimeout(()=>{
                    cardarray[0].classList.remove("shake");
                    cardarray[1].classList.remove("shake");
                    cardarray[0].classList.remove("flip");
                cardarray[1].classList.remove("flip");
                console.log(counter);
                cardarray=["",""];
                },1000)
                

            };

            
            
                
                
        }
    })
});