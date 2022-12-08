const hours = document.getElementById('hour');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
const apm = document.getElementById('ampm');

function clock(){
    let h = new Date().getHours();
    let m =new Date().getMinutes();
    let s = new Date().getSeconds();
    let x = 'AM';

    h = h < 10 ? '0'+ h: h;
    m = m < 10 ? '0'+ m: m;
    s = s < 10 ? '0'+ s: s;

    if( h > 12 ){
        h = h-12;
        x ='PM';
    }

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    apm.innerText = x;
    

    setTimeout(()=>{
        clock();
    },1000)


}

clock();