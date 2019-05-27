import Cell from '../Cell';

const countNeighbours = (
    prevGrid: Cell[][],
    column: number,
    row: number,
    columns: number,
    rows: number
    ): [number, Cell[]] => {
    let sum = 0;
    const neighbours: Cell[] = [];

    for (let adjacentColumn = -1; adjacentColumn < 2; adjacentColumn++) {
        for (let adjacentRow = -1; adjacentRow < 2; adjacentRow++) {
            // Account for edges
            const nextColumn =
                (adjacentColumn + column + columns) % columns;
            const nextRow = (adjacentRow + row + rows) % rows;

            if (prevGrid[nextColumn] && prevGrid[nextColumn][nextRow]) {
                neighbours.push(prevGrid[nextColumn][nextRow]);
                sum += prevGrid[nextColumn][nextRow].status;
            }
        }
    }

    if (prevGrid[column] && prevGrid[column][row]) {
        sum -= prevGrid[column][row].status;
    }

    return [sum, neighbours];
};

export default countNeighbours;
