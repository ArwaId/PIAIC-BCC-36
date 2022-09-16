let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","popular"];

console.log(message.join(' '));

function addTwoNumbers(x, y) {
    console.log(x + y); 
   } 
   let arr = [5, 9];
   let arr1 = [1, 2];
   addTwoNumbers(...arr,...arr1);
   