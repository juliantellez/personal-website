import {fromEvent} from 'rxjs';

import Event from '../Interfaces/IEvent';

const createMouseMoveStream = (uiNode: HTMLCanvasElement) =>
    fromEvent(uiNode, Event.MOUSE_MOVE);

export default createMouseMoveStream;
