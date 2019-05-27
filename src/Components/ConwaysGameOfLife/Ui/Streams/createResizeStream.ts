import {fromEvent} from 'rxjs';
import {throttleTime} from 'rxjs/operators';

import Event from '../Interfaces/IEvent';

const SECOND = 1000;

const createResizeStream = () =>
    fromEvent(window, Event.RESIZE)
        .pipe(
            throttleTime(SECOND / 3)
        );

export default createResizeStream;
