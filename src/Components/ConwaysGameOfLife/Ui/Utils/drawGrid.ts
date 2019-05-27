import Cell from "../../Rules/Cell";

const DEFAULT_COLOUR = '#292F36';

const drawGrid = (canvas: HTMLCanvasElement, grid: Array<Array<Cell>>, dimensions: Array<number>, resolution: number) => {
    const [ columns, rows ] = dimensions;
    const context = canvas.getContext('2d');

    for (let column = 0; column < columns; column++) {
        for (let row = 0; row < rows; row++) {
            if (grid && grid[column] && grid[column][row]) {
                const xAxis = column * resolution;
                const yAxis = row * resolution;
    
                const currentCell = grid[column][row];
                context.fillStyle = currentCell.status ? currentCell.colour.getValue() : DEFAULT_COLOUR;
                context.fillRect(xAxis, yAxis, resolution, resolution);
            }
        }
    }
};

export default drawGrid;
