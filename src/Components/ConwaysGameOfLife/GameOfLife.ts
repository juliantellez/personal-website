import { Subscription } from "rxjs";

import Rules from "./Rules/Rules";
import Ui from "./Ui/Ui";

class GameOfLife {
    public ui: Ui;
    public rules: Rules;
    public subscribers: Array<Subscription>;

    constructor(canvasNode: HTMLCanvasElement) {
        this.ui = new Ui(canvasNode);
        this.rules = new Rules();
    }

    public mount(): void {
        this.ui.mount();
        this.rules.mount(this);
    }

    public unmount(): void {
        this.ui.unmount();
        this.rules.unmount();
    }
}

export default GameOfLife;
