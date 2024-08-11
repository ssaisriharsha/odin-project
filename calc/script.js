"use strict";
function main() {
    let number1 = null;
    let number2 = null;
    let operator = null;
    let calculate = document.querySelector(".calculate");
    let num1box = document.querySelector(".number1-container > .numberbox");
    let num2box = document.querySelector(".number2-container > .numberbox");
    calculate.addEventListener("click", (e) => {
        number1 = num1box.getAttribute("value");
        console.log(number1);
    });
}

main();