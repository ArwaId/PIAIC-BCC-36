const Qlis = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PhD"];
let qlist;
function showList(Qlis) {
    for(var i=0; i < Qlis.length; i++){
    console.log((i+1) + ")" + Qlis[i]);
}
}

showList(Qlis);