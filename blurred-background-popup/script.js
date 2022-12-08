const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupConEl = document.querySelector(".popup-container")
const closeIconEl = document.querySelector(".close-icon");

const arrayimages = ["bg.jpg","bg2.jpg","bg3.jpg","doodlepink.jpg","doodlepurple.jpg","doodlepaint.jpg"];
let i=0;
btnEl.addEventListener("click",()=>{
    popupConEl.classList.remove("active");
    containerEl.classList.add("active");  
    slideshow();
            
     })
     
function slideshow(){
    if(i < arrayimages.length){
        popupConEl.style.backgroundImage = "url("+'"'+arrayimages[i]+'"'+")";             
        i++;
    }else i=0;
      
    console.log("clicked");
    setTimeout(slideshow,2000);
}

//     popupConEl.style.backgroundImage = "url("+'"'+arrayimages[1]+'"'+")";
 

closeIconEl.addEventListener("click",()=>
{
    
    popupConEl.classList.add("active");
    containerEl.classList.remove("active");
})