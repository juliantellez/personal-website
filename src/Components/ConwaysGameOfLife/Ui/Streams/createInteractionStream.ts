import { BehaviorSubject, Observable } from "rxjs";
import { merge, throttleTime, map, withLatestFrom } from "rxjs/operators";

import createTouchMoveStream from "./createTouchMoveStream";
import createMouseMoveStream from "./createMouseMoveStream";

/**
 * creates mouse and touch event streams
 */
const createInteractionStream = (
    uiNode: HTMLCanvasElement,
    resolution$: BehaviorSubject<number>
    ): Observable<[number, number]> =>
    createMouseMoveStream(uiNode)
        .pipe(
            merge(createTouchMoveStream(uiNode)),
            throttleTime(25),
            withLatestFrom(resolution$),
            map(([touchEvent, resolution]) => [
                Math.floor(touchEvent.clientX / resolution),
                Math.floor(touchEvent.clientY / resolution),
            ])
        )

export default createInteractionStream;
