"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstnum = (0, readline_sync_1.question)("Enter first number :\n");
    var operator = (0, readline_sync_1.question)("Enter the operator : \n");
    var secondnum = (0, readline_sync_1.question)("Enter second number : \n");
    var validnum = checknum(firstnum) && isoperator(operator) && checknum(secondnum);
    if (validnum) {
        var first = parseInt(firstnum);
        var second = parseInt(secondnum);
        var result = calculate(first, operator, second);
        console.log("The result is :", result);
    }
    else {
        console.log("Please Enter a Valid expression");
        main();
    }
}
function checknum(str) {
    var num = parseInt(str);
    var isnum = !isNaN(num);
    return isnum;
}
function isoperator(operator) {
    switch (operator) {
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
function calculate(firstnum, operator, secondnum) {
    switch (operator) {
        case '+': return firstnum + secondnum;
        case '-': return firstnum - secondnum;
        case '*': return firstnum * secondnum;
        case '/': return firstnum / secondnum;
        case '%': return firstnum % secondnum;
    }
}
main();
