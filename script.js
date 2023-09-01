function add (num1, num2) {
    return result = num1 + num2;
};

function subtract (num1, num2) {
    return result = num1 - num2;
};

function multiply (num1, num2) {
    return result = num1 * num2;
};

function divide (num1, num2) {
    return result = num1 / num2;
};

let firstNumber;
let secondNumber;
let operator;

function getFirstNumber(event) {
    display1.textContent += event.target.id;;
    firstNumber  = display1.textContent;
    console.log("button clicked")
    return firstNumber;
};

function calculate (operator, firstNumber, secondNumber) {
    if (operator === '+')
    {
        result = add(firstNumber, secondNumber);
    }
    else if (operator === '-')
    {
        result = subtract(firstNumber, secondNumber);
    }
    else if (operator === '*')
    {
        result = multiply(firstNumber, secondNumber);
    }
    else if (operator === '/')
    {
        result = divide(firstNumber, secondNumber);
    }
};

const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');
const container = document.querySelector('.container');
const digits = document.querySelectorAll('.digits');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('#equals');


digits.forEach((button) => button.addEventListener('click', getFirstNumber));
digits.forEach((button) => button.addEventListener("click", function(event) {
    event.stopPropagation();
}));

// function getOperator() {
//     operators.forEach((button) => button.addEventListener('click', () => {
//         display2.textContent += button.id;
//         operator = display2.textContent;
//         console.log("operator clicked");
//     }));
//     return operator;
// };

// function getSecondNumber() {
//     digits.forEach((button) => button.addEventListener('click', () => {
//         display3.textContent += button.id;
//         secondNumber = display3.textContent;
//     }));
//     return secondNumber;
// };

clear.addEventListener('click', () => {
    display1.textContent = "";
    display2.textContent = "";
    display3.textContent = "";
});