import {Observable, Subscription} from 'rxjs';

import GameOfLife from '../../GameOfLife';
import Cell from '../../Rules/Cell';
import Colour from '../../Rules/Colour';

/**
 * Subscribes to mouse and touch move events
 */
const subscribeToInteractionStream = (
    uiInteraction$: Observable<[number, number]>,
    uiNode: HTMLCanvasElement,
    gameOfLife: GameOfLife
): Subscription =>
    uiInteraction$.subscribe(([column, row]) => {
        const context = uiNode.getContext('2d');

        context.fillStyle = new Colour().getValue();
        context.fillRect(column * 10, row * 10, 10, 10);
        context.fillRect(column * 10 + 10, row * 10 + 10, 10, 10);

        if (
            gameOfLife.rules.grid[column] &&
            gameOfLife.rules.grid[column][row]
        ) {
            gameOfLife.rules.grid[column][row] = new Cell(1);
        }
    });

export default subscribeToInteractionStream;
