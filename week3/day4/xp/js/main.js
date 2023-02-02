const sideMenu = document.querySelector('.side-menu');
const drawingBoard = document.querySelector('.drawing-board');

const btnShowGrid = document.querySelector('#btn-show-grid');
const btnClear = document.querySelector('#btn-clear');

const AMOUNT_OF_CELLS = 60 * 24;


const draw = () => {

    const { _targetedCell: cell } = drawingBoard;
    if (!cell) return;


    const drawing = drawingBoard.getAttribute('data-drawing');
    if (!drawing) return;


    const color = drawingBoard.getAttribute('data-color');
    if (!color) return;



    // if (cell.classList.contains(color)) {

    //     cell.classList.remove('drawn');
    //     cell.classList.remove(color);
    //     cell.style.backgroundColor = null;
    // }
    // else {

    cell.classList.add('drawn');
    cell.classList.add(color);
    cell.style.backgroundColor = color;
    // }
};

const onDrawingCellOver = ({ target }) => {

    drawingBoard._targetedCell = target;
    draw();
};

const onDrawingCellLeave = ({ target }) => {

    if (drawingBoard._targetedCell = target) {

        delete drawingBoard._targetedCell;
    }
};

const layoutDrawingCells = () => {

    for (let i = 0; i < AMOUNT_OF_CELLS; i++) {

        const cell = document.createElement('div');

        cell.addEventListener('mouseover', onDrawingCellOver);
        cell.addEventListener('mouseleave', onDrawingCellLeave);

        drawingBoard.append(cell);
    }
};

const colorPalettes = [
    'red',
    'orangered',
    'orange',
    'yellow',
    'yellowgreen',
    'lightgreen',
    'green',
    'turquoise',
    'cyan',
    'lightskyblue',
    'dodgerblue',
    'blue',
    'darkblue',
    'indigo',
    'darkmagenta',
    'violet',
    'lightpink',
    'lightgray',
    'gray',
    'black',
    'white',
];

const onPaletteClick = ({ target }) => {

    const paletteColor = target.getAttribute('data-color');

    drawingBoard.setAttribute('data-color', paletteColor);

    const actives = document.querySelectorAll('.color-palette.active');

    if (actives?.length > 0) {

        actives.forEach(element => {

            element.classList.remove('active');
        });
    }

    target.classList.add('active');

    draw();
};

const layoutColorPalettes = () => {

    let first = null;

    for (const color of colorPalettes) {

        const palette = document.createElement('button');
        first = first ?? palette;

        palette.style.backgroundColor = color;
        palette.classList.add('color-palette');
        palette.setAttribute('data-color', color);

        palette.addEventListener('click', onPaletteClick);

        sideMenu.append(palette);
    }

    first.classList.add('active');
    onPaletteClick({ target: first });
};

const verifyDrawingGrid = () => {

    let showGrid = drawingBoard.classList.contains('show-grid');
    btnShowGrid.textContent = showGrid ? 'Hide Grid' : 'Show Grid';
};

btnShowGrid.addEventListener('click', () => {

    drawingBoard.classList.toggle('show-grid');

    verifyDrawingGrid();
});

btnClear.addEventListener('click', () => {

    document.querySelectorAll('.drawing-board>div.drawn').forEach(element => {

        element.classList.remove('drawn');
        element.style.backgroundColor = null;
    });
});

drawingBoard.addEventListener('mousedown', () => {

    drawingBoard.setAttribute('data-drawing', true);
    draw();
});

drawingBoard.addEventListener('mouseup', () => {

    drawingBoard.removeAttribute('data-drawing');
});



verifyDrawingGrid();
layoutColorPalettes();
layoutDrawingCells();