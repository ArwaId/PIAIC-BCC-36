const word = "thIs will be capiTalized for each word";

function change(){
    let newword= word.split(' ');
    for(var i=0; i < newword.length; i++){
        let first= newword[i].charAt(0).toUpperCase();
        let rest = newword[i].slice(1).toLowerCase();
        newword[i]=first.concat(rest);

    }

return newword;
}

console.log(change().join(' '));