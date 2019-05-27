import Cell from '../Cell';

import create2dArray from './create2dArray';

const randomGrid = (dimensions: number[]) => {
    const [columns, rows] = dimensions;
    const grid = create2dArray(columns, rows);

    for (let column = 0; column < columns; column++) {
        for (let row = 0; row < rows; row++) {
            grid[column][row] = new Cell(Math.floor(Math.random() * 2));
        }
    }

    return grid;
};

export default randomGrid;
