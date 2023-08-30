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

function operate (operator, firstNumber, secondNumber) {
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

const display = document.querySelector('.display');
const container = document.querySelector('.container');
const digits = document.querySelectorAll('.digits');
const buttons = document.querySelectorAll('button');

digits.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.id;
    });
});
// display.textContent = '';