let currentInput = "";
let firstNumber;
let secondNumber;
let operator;

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

const digits = document.querySelectorAll('.digits');
digits.forEach((button) => {
    button.addEventListener('click', () => {
        const digit = button.textContent;
        
        if (currentInput === '0') {
            currentInput = digit; // Replace '0' with the first digit
        } else {
            currentInput += digit;
        }
        updateDisplay();
    })
})

const operators = document.querySelectorAll('.operators');
operators.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (currentInput !== '') {
            firstNumber = currentInput;
            currentInput = '';
            if (operatorButton.id === "+") {
                operator = '+';
                updateDisplay();
            }
            else if (operatorButton.id === "-") {
                operator = '-';
                updateDisplay();
            }
            else if (operatorButton.id === "*") {
                operator = '*';
                updateDisplay();
            } 
            else if (operatorButton.id === "/") {
                operator = '/';
                updateDisplay();
            }
        }
    });
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    firstNumber = '';
    operator = '';
    updateDisplay();
});

document.getElementById('calculate').addEventListener('click', () => {
    if (currentInput !== '' && firstNumber !== '' && operator !== '') {
        const secondNumber = currentInput;
        console.log(firstNumber);
        console.log(operator);
        console.log(secondNumber);
        currentInput = calculate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        firstNumber = '';
        operator = '';
        updateDisplay();
    }
});

function calculate (firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            if (secondNumber === 0) {
                return 'Error';
            }
            return firstNumber / secondNumber;
        default:
            return 'Error';
    }
};