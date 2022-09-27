const sliderImages = document.querySelectorAll('.slide-in');


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
function checkslide(e) {
    sliderImages.forEach(slideimage => {
        //halfway throught theimage
        const slideinAt = (window.scrollY + window.innerHeight )- (slideimage.height/2);
        
        // bottom of the iamge
        const imagebottom = slideimage.offsetTop + slideimage.height;

        const ishalfShown = slideinAt > slideimage.offsetTop;
        const isnotscrolledPast =  window.scrollY < imagebottom;  
        if(ishalfShown && isnotscrolledPast) {
            slideimage.classList.add('active');
        }    
    }) ;   
       
}
window.addEventListener("scroll", debounce(checkslide));


