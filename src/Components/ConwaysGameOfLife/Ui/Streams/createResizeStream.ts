import { fromEvent } from "rxjs";
import Event from "../Interfaces/IEvent";
import { throttleTime } from "rxjs/operators";

const SECOND = 1000;

const createResizeStream = () =>
    fromEvent(window, Event.RESIZE)
        .pipe(
            throttleTime(SECOND / 3)
        )

export default createResizeStream;
