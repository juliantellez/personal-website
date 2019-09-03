import {BehaviorSubject, Observable} from 'rxjs';

interface IProducers {
    resolution$: BehaviorSubject<number>;
    resize$: Observable<Event>;
}

export default IProducers;
