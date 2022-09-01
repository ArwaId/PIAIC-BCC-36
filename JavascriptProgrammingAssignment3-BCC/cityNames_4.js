const names = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
let names2=[];
function showList(names) {
    console.log("Cities List :");
    console.log(names.join(','));
    console.log("");
let findcity = names.find(function(a) { return a === "Islamabad"});
if(findcity != undefined)
    names2.push(findcity);

    findcity = names.find(function(a) { return a === "Rawalpindi"});
if(findcity != undefined)
    names2.push(findcity);

    findcity = names.find(function(a) { return a === "Quetta"});
if(findcity != undefined)
    names2.push(findcity);
    console.log("Selected Cities List :");
    console.log(names2.join(','));

}

showList(names);