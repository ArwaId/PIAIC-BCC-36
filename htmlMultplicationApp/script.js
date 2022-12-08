let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

const QueEl = document.getElementById('question');
QueEl.innerText = `What is ${num1} multiply by ${num2} ?`;
let correctAns = num1 * num2;
console.log(correctAns,typeof correctAns);

const scoreEl = document.getElementById('score');
let score =JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText = `Score : ${score}`;

const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');

formEl.addEventListener("submit", ()=>{
    let ans = +inputEl.value;
    console.log(ans, typeof ans);
    if( ans === correctAns)
    {score++;
    UpdateLocalStorage();}
    else
    {score--;
    UpdateLocalStorage();}
    
})


function UpdateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}