import {Observable} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';

import GameOfLife from '../../GameOfLife';
import Cell from '../Cell';
import createNextGrid from '../Utils/createNextGrid';
import randomGrid from '../Utils/randomGrid';

import createTimerStream from './createTimerStream';

type GridType = Cell[][];

const createGridStream = (
    gameOfLife: GameOfLife
): Observable<[GridType, number[]]> =>
    createTimerStream(gameOfLife).pipe(
        startWith(randomGrid(gameOfLife.rules.getDimensions())),
        scan((prevGrid: GridType) =>
            createNextGrid(prevGrid, gameOfLife.rules.getDimensions())
        ),
        map((nextGrid: GridType) => [
            nextGrid,
            gameOfLife.rules.getDimensions()
        ])
    );

export default createGridStream;
