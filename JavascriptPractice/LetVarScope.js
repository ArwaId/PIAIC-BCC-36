/*
The difference between let and var is that var is function-scoped,
which is the concept we described above. let is actually not functionscoped but block-scoped. A block is defined by two curly braces { } . The
code within those braces is where let is still available.
*/

function doingStuff() {
    if (true) {
    var x = "local";
    }
    console.log(x);
   }
   doingStuff();

   function doingStuff1() {
    if (true) {
    let x = "local"; 
    }
    //console.log(x); // here x will give error saying its not defined
   }
   doingStuff1();