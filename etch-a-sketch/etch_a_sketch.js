let pixels = prompt('Size of the grid: ');

let container = document.querySelector('.container');

for (i = 0; i < pixels; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (j = 0; j < pixels; j++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
}