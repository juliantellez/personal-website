import { Subscription, Subject } from "rxjs";

import GameOfLife from "../GameOfLife";

import IProducers from "./Interfaces/IProducers";
import connectSubscriptions from "./connectSubscriptions";
import Cell from "./Cell";

class Rules {
    public generation = 0;
    public rate = 500;
    public rows = 0;
    public columns = 0;
    public grid: Cell[][];
    public producers: IProducers;
    public subscribers: Array<Subscription>;

    constructor() {
        this.addProducers()
    }

    /**
     * mount
     */
    public mount(gameOfLife: GameOfLife): void {
        this.addSubscribers(gameOfLife);
    }

    /**
     * unmount
     */
    public unmount(): void {
        this.removeSubscribers();
    }

    /**
     * setDimensions
     */
    public setDimensions(columns: number, rows: number): void {
        this.columns = columns;
        this.rows = rows;
    }

    /**
     * getDimensions
     */
    public getDimensions(): Array<number> {
        return [this.columns, this.rows]
    }

    /**
     * setGrid
     */
    public setGrid(grid: Cell[][]) {
        this.grid = grid;
    }

    /**
     * setRate
     */
    public setRate(rate: number): void {
        this.rate = rate;
    }

    /**
     * setGeneration
     */
    public setGeneration(generation: number) {
        this.generation = generation;
        this.producers.generation$.next(generation);
    }
    /**
     * getRate
     */
    public getRate(): number {
        return this.rate
    }

    /**
     * addProducers
     */
    private addProducers(): void {
        this.producers = {
            start$: new Subject<void>(),
            stop$: new Subject<void>(),
            generation$: new Subject<number>(),
        }
    }

    /**
     * addListeners
     */
    private addSubscribers(gameOfLife: GameOfLife): void {
        this.subscribers = [
            ...connectSubscriptions(gameOfLife),
        ]
    }

    /**
     * removeListeners
     */
    public removeSubscribers(): void {
        this.subscribers
            .forEach((subscription: Subscription) =>
                subscription.unsubscribe()
            )
    }
}

export default Rules
