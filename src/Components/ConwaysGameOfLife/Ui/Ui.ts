import {BehaviorSubject, Subscription} from 'rxjs';

import connectSubscriptions from './connectSubscriptions';
import IProducers from './Interfaces/IProducers';
import createResizeStream from './Streams/createResizeStream';
import drawGrid from './Utils/drawGrid';

const RESOLUTION = 10;

class Ui {
    public resolution: number = RESOLUTION;
    public canvas: HTMLCanvasElement;
    public producers: IProducers;
    public subscribers: Subscription[];

    constructor(canvasNode: HTMLCanvasElement) {
        this.canvas = canvasNode;
        this.addProducers();
    }

    /**
     * setResolution
     */
    public setResolution(resolution: number = RESOLUTION): void {
        this.producers.resolution$.next(resolution);
        this.resolution = resolution;
    }

    /**
     * mount
     */
    public mount(): void {
        this.resize();
        this.addSubscribers();
    }

    /**
     * unmount
     */
    public unmount(): void {
        this.removeSubscribers();
    }

    /**
     * adjustSize
     */
    public resize(): void {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;

        this.canvas.width = width;
        this.canvas.height = height;
    }

    /**
     * draw
     */
    public draw(grid, dimensions): void {
        requestAnimationFrame(
            () => drawGrid(this.canvas, grid, dimensions, this.resolution)
        );
    }

    /**
     * removeListeners
     */
    public removeSubscribers(): void {
        this.subscribers
            .forEach((subscription: Subscription) =>
                subscription.unsubscribe()
            );
    }

    private addProducers(): void {
        this.producers = {
            resolution$: new BehaviorSubject(RESOLUTION),
            resize$: createResizeStream()
        };
    }

    /**
     * addListeners
     */
    private addSubscribers(): void {
        this.subscribers = [
            ...connectSubscriptions(this)
        ];
    }
}

export default Ui;
