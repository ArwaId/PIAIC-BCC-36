


const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const changeicon = document.querySelectorAll('.plates input');
const items = [];


//Array of images 
     var images=new Array('cake1.png','cake2.png','cake3.png','cake4.png',cake5.png); 
    var nextimage=0; 
    
     function doSlideshow(){
    //  { if(nextimage>=images.length)
    //     {nextimage=0;}
    console.log('clicked');
    changeicon.map (m => {
    m.style.content = '🍰' ;} )
        //plates input:checked + label:before
    }

function addItem(e) {
    e.preventDefault();
    const text =(this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done:false
    };
    items.push(item);
    this.reset();
}

function populateList(plates=[],platesList) {

}



addItems.addEventListener('submit',addItem);
changeicon.addEventListener('checked',doSlideshow);