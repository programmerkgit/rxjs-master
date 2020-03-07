import { from, Observable, Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
    next: (v) => {
        console.log(v);
    }
});

const observable = from([ 1, 2, 3 ]) as Observable<number>;

observable.subscribe(subject);
