let A = [24,53,78,91,12];

function largest() {
    console.log("Array Items :"+ [...A]);
    let max = A[0];
    for(num of A) {
        if(num > max)
        max=num;
    }
    console.log("The Largest Number is " + max);
}
largest();