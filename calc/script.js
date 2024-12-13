"use strict";
let number1cont = document.querySelector(".number1-container > .numberbox");
let number2cont = document.querySelector(".number2-container > .numberbox");
let operatorCont = document.querySelector(".operator > .operatorbox");
let calculate = document.querySelector(".calculate-container > .calculate");
let number1, number2, operator;
calculate.addEventListener("click", () => {
    number1 = number1cont.value;
    number2 = number2cont.value;
    operator = operatorCont.value;
    switch(operator) {
        case "*":
            alert(Number(number1) * Number(number2));
            break;
        case "+":
            alert(Number(number1) + Number(number2));
            break;
        case "-":
            alert(Number(number1) - Number(number2));
            break;
        case "/":
            alert(Number(number1) / Number(number2));
            break;
    }
});