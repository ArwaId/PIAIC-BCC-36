 var arr=[];

function startTriangle() {
    
    for(var i=1; i < 10; i++)
    { 
        for (var j=0 ; j < i; j++)
        {   arr[j] = '*';
            

        }
        console.log(arr.join(''));

    }
    console.log(Math.round(-4.5));
}
startTriangle();