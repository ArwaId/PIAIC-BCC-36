import { question } from "readline-sync";

type Operator = '+'| '-' | '*'| '/' | '%';
function main() :void {

    const firstnum : string = question("Enter first number :\n");
    const operator : string = question("Enter the operator : \n");
    const secondnum : string = question("Enter second number : \n");

    const validnum : boolean = checknum(firstnum) && isoperator(operator) && checknum(secondnum);
    if(validnum){
        const first :number = parseInt(firstnum);
        const second :number = parseInt(secondnum);
        const result :number = calculate(first,operator as Operator,second);
        console.log("The result is :", result);
    }
    else {
        console.log("Please Enter a Valid expression")
        main();
    }
}

function checknum(str : string) :boolean {
    const num = parseInt(str);
    const isnum : boolean = !isNaN(num);
    return isnum;
}

function isoperator(operator:string) :boolean {
    switch (operator){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
        default:
            return false;        

    }

}

function calculate(firstnum :number,operator:Operator,secondnum:number) {

switch(operator){
    case '+': return firstnum + secondnum; 
    case '-': return firstnum - secondnum; 
    case '*': return firstnum * secondnum; 
    case '/': return firstnum / secondnum; 
    case '%': return firstnum % secondnum; 

}

}
main();