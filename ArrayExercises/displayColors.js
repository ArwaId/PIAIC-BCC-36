var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var y;
function Ordinal()
 {
 var o = ["th","st","nd","rd"];
 

for(var n = 0; n < color.length; n++){
    if (n>4)
    y=0;
    else y= (n+1)%4;
    console.log(color[n]+" is the "+(n+1)+o[y]+" choice");

}
 }
 Ordinal();