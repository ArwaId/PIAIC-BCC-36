//import { question } from "readline-sync";

function userin( name){
 // = question("Please enter name for imaging");
 var arr = name.split('');
 var i = arr.length;
 //console.log(arr,i);
 console.log(mirror(arr,i).join(''));

}

function mirror(arr,i){
    
    if (i > 0){
        arr.push(arr[i-1]);
        mirror(arr,i-1);
    }


    return(arr);
}
userin("arwaidris");
