var darra = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var remDup =[];





function showList(darra) {
        
       

            darra.forEach(function(entry) {
                
                if(remDup.indexOf(entry) == -1 )
                {
                    
                    remDup.push(entry);
                
                }
                
            })
          
    

console.log( [...remDup]);

}

showList(darra);