var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"];
var o =["th","st","nd","rd"];

function printlist(aCities) {
    for (var i = 1; i <= aCities.length; i++){
        console.log(`${i}${o[i%aCities.length]} choice is ${aCities[i-1]}`);
    }
}

printlist(aCities);