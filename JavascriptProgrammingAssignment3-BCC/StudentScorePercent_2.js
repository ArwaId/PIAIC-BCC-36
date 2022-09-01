const totalScore = 500;
const names = ["Michael","John","Tony"];
const scores = [320,230,480];

function output(names,scores) {

    for (var i=0; i <names.length; i++) {
        var percentage = (scores[i] / totalScore) * 100
        console.log(`Score of ${names[i]} is ${scores[i]}. Percentage:${percentage}%`);
    }
}

output(names,scores);