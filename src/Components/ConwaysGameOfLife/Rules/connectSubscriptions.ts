import {fromEvent, Subscription} from 'rxjs';
import {map, mapTo, merge, scan} from 'rxjs/operators';

import GameOfLife from '../GameOfLife';
import createInteractionStream from '../Ui/Streams/createInteractionStream';
import subscribeToInteractionStream from '../Ui/Subscription/subscribeToInteractionStream';

import createGridStream from './Streams/createGridStream';

const connectSubscriptions = (gameOfLife: GameOfLife): Subscription[] => {
    const resolutionAndResize$ = gameOfLife.ui.producers.resolution$.pipe(
        merge(gameOfLife.ui.producers.resize$.pipe(mapTo(void 0))),
        scan((prev, current) => current || prev)
    );

    return [
        /**
         * Subscribe to mouse and touch events
         */
        subscribeToInteractionStream(
            createInteractionStream(
                gameOfLife.ui.canvas,
                gameOfLife.ui.producers.resolution$
            ),
            gameOfLife.ui.canvas,
            gameOfLife
        ),

        /**
         * Remove gesturestart for multitouch
         */
        fromEvent(gameOfLife.ui.canvas, 'gesturestart')
            .pipe(map(event => event.preventDefault()))
            .subscribe(),

        resolutionAndResize$.subscribe(resolution => {
            const {width, height} = gameOfLife.ui.canvas;
            const columns = Math.ceil(width / resolution);
            const rows = Math.ceil(height / resolution);

            gameOfLife.rules.setDimensions(columns, rows);
        }),

        createGridStream(gameOfLife).subscribe(([grid, dimensions]) => {
            gameOfLife.rules.setGrid(grid);
            gameOfLife.rules.setGeneration(gameOfLife.rules.generation + 1);
            gameOfLife.ui.draw.bind(gameOfLife.ui)(
                gameOfLife.rules.grid,
                dimensions
            );
        })
    ];
};

export default connectSubscriptions;
