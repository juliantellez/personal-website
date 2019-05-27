import { Observable, BehaviorSubject } from "rxjs";

interface IProducers {
    resolution$: BehaviorSubject<number>;
    resize$: Observable<Event>;
}

export default IProducers
