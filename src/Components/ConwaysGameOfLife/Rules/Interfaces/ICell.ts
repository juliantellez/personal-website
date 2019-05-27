import Colour from "../Colour";

interface ICellState {
    colour: Colour;
    status: number;
}

interface ICell {
    prevState: ICellState;
    state: ICellState;
}

export {
    ICellState,
    ICell as default
}
