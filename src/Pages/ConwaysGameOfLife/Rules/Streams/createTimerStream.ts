import {interval, Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

import GameOfLife from '../../GameOfLife';

const createTimerStream = (gameOfLife: GameOfLife): Observable<number> => {
    const {
        producers: {start$, stop$},
        getRate
    } = gameOfLife.rules;

    const createInterval = (timeInMs: number) =>
        interval(timeInMs).pipe(takeUntil(stop$));

    return start$.pipe(
        switchMap(() => createInterval(getRate.bind(gameOfLife.rules)()))
    );
};

export default createTimerStream;
