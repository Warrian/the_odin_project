let pixels = 16;
let brush = 'black';

makeCanvas(pixels);

let resetButton = document.querySelector('#reset-button');
let colorButton = document.querySelector('#color-button');
colorButton.setAttribute('style', 'background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)');

resetButton.addEventListener('click', () => {
    pixels = prompt('Quantity of squares per side: ');
    makeCanvas(pixels);
})

colorButton.addEventListener('click', () => {
    if (brush == 'black') {
        brush = 'random';
        colorButton.removeAttribute('background-image');
        colorButton.setAttribute('style', 'background-color: black;');
    }
    else {
        brush = 'black';
        colorButton.removeAttribute('background-color');
        colorButton.setAttribute('style', 'background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)');
    }
})

function makeCanvas(pixels) {
    let canvas = document.querySelector('.canvas');

    canvas.removeAttribute('style');

    if (canvas.childNodes.length > 0) {
        canvas.childNodes.forEach(childNode => {
            childNode.removeAttribute('style');
        })
    }

    canvas.setAttribute('style', `grid-template-columns: repeat(${pixels}, 1fr);
                                     grid-template-rows: repeat(${pixels}, 1fr);`);

    for (i = 0; i < pixels * pixels; i++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('style', 'filter: brightness(100%)');
        canvas.appendChild(pixel);

        pixel.addEventListener('mouseover', () => {
            if (brush == 'black')
            pixel.setAttribute('style', `background: black;`);
            else if (brush == 'random' && pixel.style.background == '')
                pixel.setAttribute('style', `background: ${getRandomColor()};`);
            else {
                let brightness = parseInt(pixel.getAttribute('filter').match(/\d+/));
                pixel.style.filter = `brightness(${brightness - 10}%)`;
            }

            
        })
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}