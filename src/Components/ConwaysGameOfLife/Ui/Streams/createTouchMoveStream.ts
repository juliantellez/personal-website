import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import Event from "../Interfaces/IEvent";

const createTouchMoveStream = (uiNode: HTMLCanvasElement) =>
    fromEvent(uiNode, Event.TOUCH_MOVE)
        .pipe(
            map((event: TouchEvent) => event.touches['0']),
        )

export default createTouchMoveStream;
