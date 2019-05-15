import {interval} from 'rxjs';
import {startWith, scan} from 'rxjs/operators';

import create2dArray from './Utils/create2dArray';

const init = canvas => {
    const context = canvas.getContext('2d');
    const canvasWidth = 700;
    const canvasHeight = 700;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const interval$ = interval(100);

    const resolution = 10;
    const columns = canvasWidth / resolution;
    const rows = canvasHeight / resolution;

    const randomGrid = (columns = 2, rows = 2) => {
        const grid = create2dArray(columns, rows);

        for (let column = 0; column < columns; column++) {
            for (let row = 0; row < rows; row++) {
                grid[column][row] = Math.floor(Math.random() * 2);
            }
        }

        return grid;
    };

    const draw = (resolution, grid, columns = 2, rows = 2) => {
        for (let column = 0; column < columns; column++) {
            for (let row = 0; row < rows; row++) {
                const xAxis = column * resolution;
                const yAxis = row * resolution;

                context.fillStyle = grid[column][row] === 0 ? '#FFF' : '#000';
                context.fillRect(xAxis, yAxis, resolution, resolution);
            }
        }
    };

    const countNeighbours = (prevGrid, column, row) => {
        let sum = 0;
        for (let adjacentColumn = -1; adjacentColumn < 2; adjacentColumn++) {
            for (let adjacentRow = -1; adjacentRow < 2; adjacentRow++) {
                // Account for edges
                const nextColumn =
                    (adjacentColumn + column + columns) % columns;
                const nextRow = (adjacentRow + row + rows) % rows;
                sum += prevGrid[nextColumn][nextRow];
            }
        }

        sum -= prevGrid[column][row];

        return sum;
    };

    const createNextGrid = prevGrid => {
        const nextGrid = create2dArray(columns, rows);

        for (let column = 0; column < columns; column++) {
            for (let row = 0; row < rows; row++) {
                const currentState = prevGrid[column][row];

                // Count live neighbours
                const neighbours = countNeighbours(prevGrid, column, row);

                if (currentState === 0 && neighbours === 3) {
                    nextGrid[column][row] = 1;
                } else if (currentState === 1 && neighbours < 2) {
                    nextGrid[column][row] = 0;
                } else if (currentState === 1 && neighbours > 3) {
                    nextGrid[column][row] = 0;
                } else {
                    nextGrid[column][row] = currentState;
                }
            }
        }

        return nextGrid;
    };

    interval$
        .pipe(
            startWith(randomGrid(columns, rows)),
            scan(prevGrid => createNextGrid(prevGrid))
        )
        .subscribe(grid => {
            draw(resolution, grid, columns, rows);
        });
};

export default init;
