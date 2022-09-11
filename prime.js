function primeNumner() {
    
    for(var i=2;i<50;i++){
        var prime= true;
        for (var a=2;a < i/2; a++){
            if (i % a == 0 ){
                prime= false;
                break;
                
            }
        }if (prime == true) { console.log(i);}

    }

}
primeNumner();