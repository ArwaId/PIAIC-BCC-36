function curr(op){

var d = new Date();
return d.getMonth()+1+op+d.getDate()+op+d.getFullYear();

}

console.log(curr('-'));
console.log(curr('/'));