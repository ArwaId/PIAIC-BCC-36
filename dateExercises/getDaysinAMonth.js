function curr(m,y){

    var d = new Date(y,m,0);
    return d.getDate();
    }
    
    console.log(curr(1,2022));
    console.log(curr(2,2022));
    console.log(curr(3,2022));
    console.log(curr(12,2022));