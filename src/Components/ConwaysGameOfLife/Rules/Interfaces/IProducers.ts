import { Subject } from "rxjs";

interface IProducers {
    start$: Subject<void>;
    stop$: Subject<void>;
    generation$: Subject<number>;
}

export default IProducers;
