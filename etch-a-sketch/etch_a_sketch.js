let pixels = 100;
//let pixels = prompt('Size of the grid: ');
let container = document.querySelector('.container');

container.setAttribute('style', `grid-template-columns: repeat(${pixels}, 1fr);
                                 grid-template-rows: repeat(${pixels}, 1fr);`);

for (i = 0; i < pixels * pixels; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
}