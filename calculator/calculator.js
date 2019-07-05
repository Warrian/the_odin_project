const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ButtonClick(button.id);
    })

    button.addEventListener('mouseover', () => {
        button.classList.add('button-hover');
    })

    button.addEventListener('mouseout', () => {
        button.classList.remove('button-hover');
    })
})

function ButtonClick(btn) {
    switch (btn) {
        case 'clear':
            display.textContent = ''
            break;
        case 'erase':
            // display.textContent.
            break;
        case 'dot':
            display.textContent += '.'
            break;
        case 'plus':
            display.textContent += '+'
            break;
        case 'seven':
            display.textContent += '7'
            break;
        case 'eight':
            display.textContent += '8'
            break;
        case 'nine':
            display.textContent += '9'
            break;
        case 'minus':
            display.textContent += '-'
            break;
        case 'four':
            display.textContent += '4'
            break;
        case 'five':
            display.textContent += '5'
            break;
        case 'six':
            display.textContent += '6'
            break;
        case 'multiply':
            display.textContent += 'x'
            break;
        case 'one':
            display.textContent += '1'
            break;
        case 'two':
            display.textContent += '2'
            break;
        case 'three':
            display.textContent += '3'
            break;
        case 'divide':
            display.textContent += '/'
            break;
        case 'zero':
            display.textContent += '0'
            break;
        case 'equals':
            // display.textContent += '/'
            break;
    }
}