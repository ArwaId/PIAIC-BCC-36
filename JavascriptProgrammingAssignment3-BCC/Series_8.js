function Counting() {
 var i = 1;
 let Arr =[];
while(i <=15){
    
    Arr.push(i);
    i++;
}
console.log("Counting : "+ [...Arr] );
}

function reversecounting() {
    var i = 10;
    let Arr =[];
    while(i > 0){
    
    Arr.push(i);
    i--;
}
console.log("Reverse Counting : "+ [...Arr] );
}
function even() {
    var i = 0;
    let Arr =[];
    while(i <= 20){
    if(i % 2 == 0 )
    Arr.push(i);
    i++;
}
console.log("Even : "+ [...Arr] );
}

function odd() {
    var i = 0;
    let Arr =[];
    while(i <= 20){
    if(i % 2 != 0 )
    Arr.push(i);
    i++;
}
console.log("Odd : "+ [...Arr]);
}
function series() {
    var i = 1;
    let Arr =[];
    while(i <= 20){
    if(i % 2 == 0 )
    Arr.push(i+"x");
    
    i++;
}
console.log("Series : "+ [...Arr]);
}

Counting();
reversecounting();
even();
odd();
series();