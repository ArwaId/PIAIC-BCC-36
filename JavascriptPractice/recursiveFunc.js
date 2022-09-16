/*function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
    logRecursive(nr - 1);
    } else {
    console.log("done with recursion");
    }
    console.log("Ended function:", nr);
   }
   logRecursive(3);
*/
   var i =0;
   var arr = [];

   function r(n) {
    console.log(n)
    arr.push(n);
    if (n > 0)
    {
        r(n-1);
    }else console.log("done");

    console.log(n);
    arr.push(n);
    
}
r(3);
console.log(arr.join(' '));