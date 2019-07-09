const buttons = document.querySelectorAll('button');
let operation = document.querySelector('.operation');
let result = document.querySelector('.result');
result.textContent = '0';
let expression = [];
let operand = '0';
let resultDisplayed = false;
let lastResult = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ButtonClick(button);
    })
})

function ButtonClick(input) {
    if (input.id != 'clear' && input.id != 'erase') {
        if (resultDisplayed) {
            ClearEverything();
            operand = lastResult;
            resultDisplayed = false;
        }

        SetValue(input.textContent);
    }

    switch (input.id) {
        case 'clear':
            ClearEverything();
            break;
        case 'erase':
            Erase();
            break;
        case 'equals':
            Evaluate();
            break;
    }
}

function ClearEverything() {
    operation.textContent = '';
    result.textContent = '0';
    operand = '0';
    expression = [];
}

function Erase() {
    if (operation.textContent == '' && operand == '0' || resultDisplayed)
        return;

    let opArray = Array.from(operand);
    opArray.pop();
    operand = opArray.join('').toString() || 0;

    result.textContent = operand
}

function SetValue(input) {
    if (isNaN(input) && input != '.') {
        expression.push(operand);
        operand = '0';

        if (input != '=')
            expression.push(input);

        result.textContent = '0';
        operation.textContent = expression.join(' ').toString();
    }
    else {
        if (result.textContent == '0' && input != '.') {
            result.textContent = input;
            operand = input;
        }
        else {
            if (result.textContent == '0')
                operand = '0';

            result.textContent += input;
            operand += input;
        }
    }
}

function MultiplyDivide(expression) {
    let res = 0;

    if (expression.includes('x') || expression.includes('÷')) {

        let multiplicationIndex = expression.findIndex((e) => e == 'x');

        if (multiplicationIndex > 0) {
            res = parseFloat(expression[multiplicationIndex - 1]) * parseFloat(expression[multiplicationIndex + 1]);
            expression.splice(multiplicationIndex - 1, 3, res.toString());
        }

        return MultiplyDivide(expression);
    }

    return expression;
}

function Evaluate() {
    let res = 0;

    expression = MultiplyDivide(expression);

    if (expression.length > 1) {
        for (let i = 0; i < expression.length; i++) {
            switch (expression[i]) {
                case '+':
                    res = parseFloat(expression[i - 1]) + parseFloat(expression[i + 1]);
                    expression.splice(i - 1, 3, res.toString());
                    i = 0;
                    break;
                case '-':
                    res = parseFloat(expression[i - 1]) - parseFloat(expression[i + 1]);
                    expression.splice(i - 1, 3, res.toString());
                    i = 0;
                    break;
            }
        }
    }
    else {
        res = expression;
    }

    operand = res.toString();
    result.textContent = res;
    expression = [];
    resultDisplayed = true;
    lastResult = operand;
}