import Cell from "../Cell";

// [ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0] ]

const create2dArray = (columns: number, rows: number): Array<Array<Cell>> => {
    const array = new Array(columns);
    for (let index = 0; index < array.length; index += 1) {
        array[index] = new Array(rows);
    }

    return array;
};

export default create2dArray;
