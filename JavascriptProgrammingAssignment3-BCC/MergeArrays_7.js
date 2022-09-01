var a=[10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var mergeArr1 = [];



function mergeBoth(a,b) {
for(var i=0 ; i <a.length ; i++){
    if (mergeArr1.indexOf(a[i]) == -1)
    mergeArr1.push(a[i]);
}
for(var i=0 ; i <b.length ; i++){
    if (mergeArr1.indexOf(b[i]) == -1)
    mergeArr1.push(b[i]);
}


mergeArr1.sort((a,b) =>a-b);       
    console.log(mergeArr1);
}
mergeBoth(a,b);