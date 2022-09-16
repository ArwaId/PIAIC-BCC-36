function doingStuff() { 
    if (true) { 
    console.log(x);
    var x = "local";
    }
   }
   doingStuff();

   /*Here we get the error that x is not defined . Since let is only blockscoped, x goes out of scope when the if block ends and can no longer be
accessed after that.*/