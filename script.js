let currentInput = "";
let firstNumber = "";
let operator = "";
let result = null;

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

const digits = document.querySelectorAll('.digits');
digits.forEach((button) => {
    button.addEventListener('click', () => {
        const digit = button.textContent;
        
        if (currentInput === '0' || currentInput === firstNumber) {
            currentInput = digit; // Replace '0' or previous result with the first digit
            result = null;
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
            if (firstNumber === "") {
                firstNumber = currentInput;
                operator = operatorButton.id;
                currentInput = '';
                updateDisplay();
            }
            else if (firstNumber !== '' && operator !== '') {
                result = calculate(parseFloat(firstNumber), operator, parseFloat(currentInput));
                currentInput = result;
                firstNumber = result;
                operator = operatorButton.id;
                updateDisplay();
            }
        }
        
    });
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    firstNumber = '';
    operator = '';
    result = null;
    updateDisplay();
});

document.getElementById('calculate').addEventListener('click', () => {
    if (currentInput !== '' && firstNumber !== '' && operator !== '') {
        result = calculate(parseFloat(firstNumber), operator, parseFloat(currentInput));
        currentInput = result.toString();
        firstNumber = '';
        operator = '';
        updateDisplay();
    }
});

function calculate (firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return Math.round((firstNumber + secondNumber)* 100)/ 100;
        case '-':
            return Math.round((firstNumber - secondNumber)* 100)/ 100;
        case '*':
            return Math.round((firstNumber * secondNumber)* 100)/ 100;
        case '/':
            if (secondNumber === 0) {
                return 'Error';
            }
            return Math.round((firstNumber / secondNumber)* 100)/ 100;
        default:
            return 'Error';
    }
};