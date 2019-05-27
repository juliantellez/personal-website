import Colour from "./Colour";

/**
 * 0: dead
 * 1: alive
 */
class Cell {
    public status: number;
    public colour: Colour;

    constructor(status: number, colour ?: Colour) {
        this.nextState(status, colour)
    }

    /**
     * addState
     */
    public nextState(status: number, colour ?: Colour) {
        this.status = status
        this.colour = colour || new Colour()
    }
}

export default Cell;
