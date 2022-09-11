var result = [];

function change(str) {
  for(var x=0; x<str.length; x++)
  { 
    //console.log(str[x].charCodeAt());
    if (str[x].charCodeAt() < 97)
        result[x]= str[x].toLowerCase();
    else
        result[x]= str[x].toUpperCase();


    
    
  }
  return(result.join(''));
}


console.log(change("ArwaIdrisAli"));